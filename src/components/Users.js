import React from 'react'

const Users = ({users,user,setUser})=> {
    return(
        <nav>
        <span className="strong">Set User:</span> {users.map(usr=>(<span key={usr} className={usr.includes(user) ? "user-nav-active":"user-nav"}
        onClick={()=> setUser(usr)}>{usr}</span>))}
        </nav>
    )
}

export default Users