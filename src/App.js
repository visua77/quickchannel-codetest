import React,{useState, useEffect} from 'react'
import Chat from './components/Chat'
import InputMsg from './components/InputMsg'
import Header from './components/Header'

const App=()=> {

  const [users, setUsers] = useState(['You','Guest'])
  const [user, setUser] = useState()
  const [chatHistory, setChatHistory] = useState([{
    userName:undefined, 
    msg: undefined
  }])
  const [chatMsg, setChatMsg] = useState('')

  console.log('msg',chatMsg)
  console.log('usr',user)

  const handleSubmit = (e)=> {
    e.preventDefault()
    if(chatMsg!=='')setChatHistory(prevState => [...chatHistory, {
      userName: user, 
      msg: chatMsg
    }])
    setChatMsg('')
    console.log('chatmsg',chatMsg)
  }

  useEffect(()=> {

  },[])

  return (
    <><Header users={users} setUser={setUser} />
    <div className="main">
      <Chat chatHistory={chatHistory} users={users} user={user} />
      <InputMsg setChatMsg={setChatMsg} handleSubmit={handleSubmit}  />
    </div>
    </>
  )
}

export default App
