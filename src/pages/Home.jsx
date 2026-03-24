import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    let[input, setInput] = useState("")
    let navigate=useNavigate()

    function handleJoin() {
        navigate(`/room/${input.trim()}`)
    }


  return (
    <div className='home'>
        <input 
            type="text" 
            placeholder='Enter your roomID...' 
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleJoin}>Join Now</button>
    </div>
  )
}

export default Home