import React from 'react'

const Users = ({users,user,setUser})=> {
    return(
        <nav>
        {users.map(usr=>(<span key={usr} className={usr.includes(user) ? "user-nav-active":"user-nav"}
        onClick={()=> setUser(usr)}>{usr}</span>))}
        </nav>
    )
}

export default Users