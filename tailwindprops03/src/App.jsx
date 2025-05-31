// import { useState } from 'react'
import Cards from './components/cards.jsx'

import './App.css'

function App() {
  

  return (
    <>
     <h1 className='bg-green-600 pt-2 pb-2 rounded-2xl pl-6 pr-6'>Tailwind Test</h1>
     
     <Cards username="Aarav" content="A curious and intelligent boy who loves solving puzzles." rate="4.0"/>
     <Cards username="dharuv" content="A curious and intelligent boy who loves solving puzzles." rate="5.0"/>
     <Cards />

        
        
    </>
  )
}

export default App
