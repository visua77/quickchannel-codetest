import React from 'react'

const Users = ({users,setUser})=> {
    return(
        <nav>
        {users.map(usr=>(<span key={usr} className="user-nav"onClick={()=> setUser(usr)}>{usr}</span>))}
        </nav>
    )
}

export default Users