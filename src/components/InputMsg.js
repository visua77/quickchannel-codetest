import React from 'react'

const InputMsg = ({setSubmit, setChatMsg, chatMsg,user,setDescription})=> {
    return(
    <>
    <form onSubmit={(e)=> {
        setSubmit(true)
        e.preventDefault()
        if(user===undefined)setDescription('Please select a USER top-right to chat!')}}>
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