import React from 'react'

const Chat = ({chatHistory,setChatHistory,users,user})=> {

    const deleteMsg = (index)=> {
        const newArray = chatHistory
        newArray.splice(index,1)
        setChatHistory([...newArray])
    }

    return(
        <>
        {user !== undefined ? <span className="display-user">{user}:</span>:<span className="display-user">Please select user...</span>}
        <div className="chat-card">
            <div className="container">
            {user !== undefined ?<span className="user">User '{user}'' is selected👍</span>:null}
                {user !== undefined  ? chatHistory.map((msg, index)=> (
                    <div key={index}>
                        {msg.userName!==undefined ? 
                        <span className="user">{`${msg.userName}:`}</span>:null}
                        {msg.msg!== undefined ? 
                        <p className={msg.userName.includes('You') ?"msg-item":"msg-item-user"}><span>{msg.msg}</span><span className="delete-msg"onClick={()=> deleteMsg(index)
                        }>X</span></p>:null
                        }
                    </div>
                )):<p>Choose a user top-right, and start the chat😀</p>}
            </div>
        </div>
        </>
    )
}

export default Chat