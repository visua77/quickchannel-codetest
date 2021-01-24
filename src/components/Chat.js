import React from 'react'

const Chat = ({chatHistory,users,user})=> {

    return(
        <>
        {user !== undefined ? <span className="display-user">{user}:</span>:<span className="display-user">Please select user...</span>}
        <div className="chat-card">
            <div className="container">
                {user !== undefined  ? chatHistory.map(msg=> (
                    <div key={Math.floor(Math.random())}>
                        {msg.userName!==undefined ? <span className="user">{`${msg.userName}:`}</span>:null}
                        {msg.msg!== undefined ? <p className="msg-item">{msg.msg }</p>:null}
                    </div>
                )):<p>Type something to start the chat😀</p>}
            </div>
        </div>
        </>
    )
}

export default Chat