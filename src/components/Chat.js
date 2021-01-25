import React from 'react'

const Chat = ({chatHistory,users,user})=> {

    return(
        <>
        {user !== undefined ? <span className="display-user">{user}:</span>:<span className="display-user">Please select user...</span>}
        <div className="chat-card">
            <div className="container">
            {user !== undefined ?<span className="user">User '{user}'' is typing...</span>:null}
                {user !== undefined  ? chatHistory.filter(itm => itm.msg !== '').map(msg=> (
                    <div key={Math.random()}>
                        {msg.userName!==undefined ? 
                        <span className="user">{`${msg.userName}:`}</span>:null}
                        {msg.msg!== undefined ? 
                        <p className={msg.userName.includes('You') ?"msg-item":"msg-item-user"}>{msg.msg }</p>:null
                        }
                    </div>
                )):<p>Choose a user top-right, and start the chat😀</p>}
            </div>
        </div>
        </>
    )
}

export default Chat