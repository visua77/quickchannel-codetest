import React from 'react'

const Chat = ({chatHistory,users,user})=> {

    return(
        <div className="chat-card">
            <div className="container">
                {user !== undefined  ? chatHistory.map(msg=> (
                    <div key={Math.floor(Math.random())}>
                        <span className="user">{msg.userName}:</span>
                        <p className="msg-item">{msg.msg !== '' ? msg.msg :null}</p>
                    </div>
                )):<p>Type something to start the chat😀</p>}
            </div>
        </div>
    )
}

export default Chat