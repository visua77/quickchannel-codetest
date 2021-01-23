import React from 'react'

const Chat = ({chatHistory})=> {

    return(
        <div className="chat-card">
            {chatHistory.map(msg=> (
                <p key={Math.random()}className="msg-item">{msg}</p>
            ))}
        </div>
    )
}

export default Chat