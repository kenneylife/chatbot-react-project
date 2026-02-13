import React, { useState } from 'react'

import ChatMessages from './components/ChatMessages'
import ChatInput from './components/Chatinput'

import './App.css'

function App() {
    const [chatMessages, setChatMessages] = useState([
          // {
          //     message: 'hello chatbot',
          //     sender: 'user',
          //     id: crypto.randomUUID()
          // },{
          //     message: 'how can i help you?',
          //     sender: 'robot',
          //     id: crypto.randomUUID()
          // }                                                                         
      ])
  return (
    <div className='app'>
      <ChatMessages chatMessages=      {chatMessages}/>
        <ChatInput chatMessages=  {chatMessages} setChatMessages={setChatMessages} />
    </div>
    
  )
}

export default App