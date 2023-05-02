import React, { useEffect, useState } from 'react'

const ChatPage = () => {
  // const [chats, setChats] = useState([])

  const fetchChats = () => {
    // const data = await axios('')
  }

  useEffect(() => {
    fetchChats()

    return () => {
      fetchChats()
    }
  }, [])

  return <div>ChatPage</div>
}

export default ChatPage
