'use client'

import { useEffect, useState, useContext, createContext } from 'react'

const ToastContext = createContext(null)

export default function Toast({ children }) {
  const [messages, setMessages] = useState([])
  
  const addMessage = (message, type, timeout) => {
    setMessages([...messages, { id: crypto.randomUUID(), message, timeout, type }])
  }

  const handleComplete = (id) => {
    setMessages(prevMessages => prevMessages.filter(({ id: messageId }) => messageId !== id))
  }
  
  return (
    <ToastContext.Provider value={{
      addMessage
    }}>
      {children}
      <ToastContainer>
        {messages.map(({id, message, timeout, type}) => (
          <ToastMessage
            key={id}
            id={id}
            message={message}
            timeout={timeout}
            type={type}
            onComplete={handleComplete}
          />
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error(`useToast must be used within a Toast`)
  }

  return context
}

function ToastContainer({ children }) {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col-reverse">
      {children}
    </div>
  )
}

function ToastMessage({ id, message, onComplete, timeout, type='success' }) {
  const [opacity, setOpacity] = useState('opacity-0')
  const innerTimeout = timeout || 3000

  const colorClass = type === 'error' ? 'bg-red-900 border-red-900 text-red-200' : 'bg-teal-900 border-teal-900 text-teal-200'

  useEffect(() => {
    const clearFadeIn = setTimeout(() => {
      setOpacity('opacity-100')
    }, 10)
    
    const clearFadeOut = setTimeout(() => {
      setOpacity('opacity-0')
    }, innerTimeout)

    const clearToast = setTimeout(() => {
      onComplete(id)
    }, innerTimeout + 500)

    return () => {
      clearTimeout(clearFadeIn)
      clearTimeout(clearFadeOut)
      clearTimeout(clearToast)
    }
  }, [innerTimeout, id, onComplete])

  return (
    <div 
      className={`
        p-4
        mb-1
        font-bold 
        right-5 
        max-w-xs 
        border 
        text-sm 
        rounded-lg
        transition-all
        ease-in-out
        duration-500
        ${opacity}
        ${colorClass}
      `}
    >
      {message}
    </div>
  )
}