import React,{useState, useEffect} from 'react'
import Chat from './components/Chat'
import InputMsg from './components/InputMsg'
import Header from './components/Header'

const App=()=> {

  const [users, setUsers] = useState(['You','Guest'])
  const [user, setUser] = useState(undefined)
  const [description, setDescription] = useState('Choose a User top-right, and start the chat😀')
  const [chatHistory, setChatHistory] = useState([{
    userName:undefined, 
    msg: undefined
  }])
  const [chatMsg, setChatMsg] = useState('')
  const [submit, setSubmit] = useState(false)
  
  useEffect(()=> {
    
    if(chatMsg!=='' && user!==undefined)setChatHistory(prevState => [...chatHistory, {
      userName: user, 
      msg: chatMsg
    }])
    setChatMsg('')
    setSubmit(false)

  },[submit,chatHistory])

  return (
    <><Header users={users} user={user} setUser={setUser} />
      <div className="main">
      <Chat chatHistory={chatHistory} setChatHistory={setChatHistory} description={description} user={user} />
      <InputMsg setChatMsg={setChatMsg} setSubmit={setSubmit} chatMsg={chatMsg} user={user} setDescription={setDescription}  />
      </div>
    </>
  )
}

export default App
