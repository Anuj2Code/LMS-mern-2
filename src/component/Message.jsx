import React from 'react'
import Chat from './Chat'

const Message = ({user}) => {
  return (
    <div>
        <Chat user={user} />
    </div>
  )
}

export default Message
