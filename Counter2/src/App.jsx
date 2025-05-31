import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [ c,cset]=useState(10)

  // let c=15;

  const removevalue= ()=>{
    if (c<=0){cset(0)}

    else {cset(c-1)}

    console.log(c,'remove');
    
    
  };

  const addvalue = ()=> {
    if (c>=20) {
      cset(20)
      
    }

    else{
      cset(c+1)
    }
    
    
    
  }
  

  return (
    <>
      <h1>HI Heeloo how are you</h1>
      <h2>Counter value:{c}</h2>

      <button  onClick={addvalue}>Add value {c}</button>
      <button onClick={removevalue}>remove value {c}</button>
    </>
  )
}

export default App
