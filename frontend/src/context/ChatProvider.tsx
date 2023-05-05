/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export type chatContextType = {
  user?: any
  setUser?: any
  selectedChat?: any
  setSelectedChat?: any
  chats?: any
  setChats?: any
}

const ChatContext = createContext({})

const ChatProvider = (props: any) => {
  const [user, setUser] = useState()
  const [selectedChat, setSelectedChat] = useState()
  const [chats, setChats] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo')!)

    if (!userInfo) {
      navigate('/')
    } else {
      setUser({
        ...userInfo.data,
        token: userInfo.token
      })
    }
  }, [navigate])

  return (
    <ChatContext.Provider value={{ user, setUser, selectedChat, setSelectedChat, chats, setChats }}>
      {props.children}
    </ChatContext.Provider>
  )
}

export const ChatState = () => {
  return useContext(ChatContext)
}

export default ChatProvider
