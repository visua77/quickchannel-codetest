import React from 'react'

const InputMsg = ({setSubmit, setChatMsg, chatMsg})=> {
    return(
    <>
    <form onSubmit={(e)=> {
        setSubmit(true)
        e.preventDefault()}}>
        <input onChange={(e)=> 
            setChatMsg(e.target.value)} 
            placeholder="Type to chat..."
            value={chatMsg}></input>
        <button>Send</button>
    </form>
    </>
    )
}

export default InputMsg