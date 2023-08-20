const keyName = "auth"

export const setToken = token => localStorage.setItem(keyName, token)

export const getToken = () => localStorage.getItem(keyName)

export const removeToken = () => localStorage.removeItem(keyName)
