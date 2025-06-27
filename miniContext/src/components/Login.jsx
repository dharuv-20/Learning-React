import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [name,setName]=useState('')
    const [pass, setPass] = useState('')

    const{setUser}= useContext(UserContext)



    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({name,pass})

    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder='enter name '/>
        {"         "}
        <input type="text" value={pass} onChange={(e)=> setPass(e.target.value)} placeholder='enter Password'/>
        
        <button onClick={handleSubmit}> submit </button>
    </div>
  )

}

export default Login