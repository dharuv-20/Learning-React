import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {

    const [data,setData]=useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/dharuv-20')
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setData(data)

      })
      }
    , [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-4xl'>Github Repos {data.public_repos} 
    <img src={data.avatar_url} alt="Git Pic" width={300} />
    </div>
  )
}

export default Github