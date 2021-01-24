import React from 'react'

const Chat = ({chatHistory})=> {

    return(
        <div className="chat-card">
            <div className="container">
                {chatHistory.length ? chatHistory.map(msg=> (
                    <p key={Math.random()}className="msg-item">{msg}</p>
                )):null}
            </div>
        </div>
    )
}

export default Chat