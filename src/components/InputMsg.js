import React from 'react'

const InputMsg = ({handleSubmit, setChatMsg})=> {
    return(
    <>
    <form onSubmit={handleSubmit}>
        <input onChange={(e)=> setChatMsg(e.target.value)} placeholder="Type to chat..."></input>
        <button>Send</button>
    </form>
    </>
    )
}

export default InputMsg