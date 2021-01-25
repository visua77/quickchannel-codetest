import React,{useState, useEffect} from 'react'
import Chat from './components/Chat'
import InputMsg from './components/InputMsg'
import Header from './components/Header'

const App=()=> {

  const [users, setUsers] = useState(['You','Guest'])
  const [user, setUser] = useState(undefined)
  const [chatHistory, setChatHistory] = useState([{
    userName:undefined, 
    msg: undefined
  }])
  const [chatMsg, setChatMsg] = useState('')
  const [submit, setSubmit] = useState(false)

  console.log('msg',chatMsg)
  console.log('usr',user)

  useEffect(()=> {
    
    if(chatMsg!=='' && user!==undefined)setChatHistory(prevState => [...chatHistory, {
      userName: user, 
      msg: chatMsg
    }])
    setChatMsg('')
    console.log('array', chatHistory)
    setSubmit(false)

  },[submit])

  return (
    <><Header users={users} setUser={setUser} />
      <div className="main">
      <Chat chatHistory={chatHistory} users={users} user={user} />
      <InputMsg setChatMsg={setChatMsg} setSubmit={setSubmit} chatMsg={chatMsg}  />
      </div>
    </>
  )
}

export default App
