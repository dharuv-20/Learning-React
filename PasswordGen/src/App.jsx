import { useCallback, useState,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [password, setPassword] = useState("")
  const [charallowed, setcharal] = useState(true)
  const [numallowed, setnumal] = useState(false)
  const passref=useRef(null)

  const passGen = useCallback(()=>{
    let pass = ''
    let str= "QWERTYUIOPLKJHGFDSAZCVBNMmnbvczlkjhgfdsaqwertyuiopXx"
    if (numallowed) str+="0987654321"
    if (charallowed) str += "!@#$%^&*()_+-={}>"

    for (let i = 1; i <=length; i++) {

      let char= Math.floor(Math.random()* str.length +1) 
      pass += str[char]
    }

    setPassword(pass)

  }, [length,charallowed,numallowed,setPassword])

  const copytoclipboard= useCallback(()=>{
    passref.current?.select()
    window.navigator.clipboard.writeText(password)

  },[password])

  useEffect(()=>{passGen()}, [length,charallowed,numallowed,passGen])

  
  return (
    <>
    {/* <h1 className='text-5xl text-center text-white'>Passwords Genrator</h1> */}
    <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-6 text-white bg-gray-900 '>
      <h1 className=' text-center text-3xl text-white my-4'>Password Genrator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 h-10'>
        <input type="text"
        value={password}
        className=' outline-none w-full py-1 px-2 rounded-lg text-black bg-white '
        placeholder='Password'
        readOnly
        ref={passref}
        name=""
        id="" />

        <button className='text-white outline-none bg-blue-600 px-6 py-1 rounded-lg shrink-0 mx-1' onClick={copytoclipboard}>copy</button>
      </div>

      <div className='flex text-sm gap-x-5 '>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={8}
          max={20}
          value={length}
         className='cursor-pointer'
         onChange={(e)=>{setlength(e.target.value)}}/>

         <label className=' text-white' htmlFor="">length:{length}</label>

        </div>

        <div className='flex items-center gap-x-1' >
          <input type="checkbox"
          defaultChecked={numallowed}
          id="numinput"
          onChange={()=>{
            setnumal((p)=>!p)
          }}
          name=""/>
          <label  htmlFor="numinput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1' >
          <input type="checkbox"
          defaultChecked={charallowed}
          id="charinput"
          onChange={()=>{
            setcharal((p)=>!p)
          }}
          name=""/>
          <label  htmlFor="charinput">Character</label>
        </div>


      </div>
    </div>
      
    </>
  )
}

export default App
