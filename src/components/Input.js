import React from 'react'

const Input = ({handleSubmit, setChatMsg})=> {
    return(
    <>
    <form onSubmit={handleSubmit}>
        <input onChange={(e)=> setChatMsg(e.target.value)} placeholder="Type to chat..."></input>
    </form>
    </>
    )
}

export default Input