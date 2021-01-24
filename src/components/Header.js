import React from 'react'
import Users from './Users'

const Header = ({users,setUser})=>{
    return(
        <div className="header-nav">
            <h1>Chat app</h1>
            <Users users={users} setUser={setUser} /></div>
    )
}

export default Header