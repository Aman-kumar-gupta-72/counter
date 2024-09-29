import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(5)
  const addValue=()=>{
    if(counter>=0 && counter<20){
      setCounter(counter+1)
    }
  }
  const removeValue=()=>{
    if(counter>0 && counter<=20){
      setCounter(counter-1)
    }
    
    
  }


  return (
    <>
     <h1>Aman Gupta</h1>
     <h2>Counter value: {counter} </h2>
     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={removeValue}>Decrease value</button>


     
    </>
  )
}

export default App
