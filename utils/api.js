import axios from "axios"
import { getToken, setToken, removeToken } from "./auth-token"

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL

axios.interceptors.request.use(
  config => {
    if (typeof window === 'object') {
      const token = getToken()
      if (token) config.headers.authorization = token
    }
    return config
  },
  error => Promise.reject(error)
)

axios.interceptors.response.use(
  response => {
    if (typeof window === 'object') {
      const token = response.headers.authorization
      if (token) setToken(token)
    }

    return response
  },
  error => {
    if (typeof window === 'object' && error.response?.status === 401) {
      removeToken()
    }
    return Promise.reject(error)
  }
)

export const get = (url, params) => axios.get(url, { params })
export const post = (url, data) => axios.post(url, data)
export const put = (url, data) => axios.put(url, data)
export const destroy = (url, data) => axios.delete(url, data)