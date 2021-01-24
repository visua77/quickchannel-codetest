import React,{useState, useEffect} from 'react'
import Chat from './components/Chat'
import InputMsg from './components/InputMsg'

const App=()=> {

  const [chatHistory, setChatHistory] = useState([])
  const [chatMsg, setChatMsg] = useState('')

  console.log(chatMsg)

  const handleSubmit = (e)=> {
    e.preventDefault()
    if(chatMsg!=='')setChatHistory(prevState => [...chatHistory, chatMsg])
    setChatMsg('')
  }

  useEffect(()=> {

  },[])

  return (
    <div className="main">
      <Chat chatHistory={chatHistory} />
      <InputMsg setChatMsg={setChatMsg} handleSubmit={handleSubmit}  />
      
    </div>
  )
}

export default App
