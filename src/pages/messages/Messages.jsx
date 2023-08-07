import React from 'react'
import './messages.scss'
import ChatComponent from '../message/ChatComponent'
import Navbar from '../../components/navbar/Navbar'

function Messages() {
  return (
    <div>
      <div className='flex'>
        <ChatComponent />
      </div>
    </div>
  )
}

export default Messages