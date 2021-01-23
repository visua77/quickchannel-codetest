import React,{useState, useEffect} from 'react'
import Chat from './components/Chat'
import Input from './components/Input'

const App=()=> {

  const [chatHistory, setChatHistory] = useState([])
  const [chatMsg, setChatMsg] = useState('')

  console.log(chatMsg)

  const handleSubmit = (e)=> {
    e.preventDefault()
    setChatHistory(prevState => [...chatHistory, chatMsg])
    setChatMsg('')
  }

  useEffect(()=> {

  },[])

  return (
    <div className="main">
      <Chat chatHistory={chatHistory} />
      <Input setChatMsg={setChatMsg} handleSubmit={handleSubmit}  />
      
    </div>
  )
}

export default App
