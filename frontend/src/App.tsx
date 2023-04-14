import { Route, Routes } from 'react-router-dom'

import './App.css'
import { HomePage, ChatPage } from './Pages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  )
}

export default App
