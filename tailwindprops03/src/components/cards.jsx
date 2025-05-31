import React from 'react'
// 

function Cards({username="Unknown", content="Null", rate=0.0}) {
    
    
  return (
     <div className="relative max-w-lg p-8 border m-7 bg-black border-gray-100 shadow-xl rounded-xl">
        <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
          {rate}
        </span>
  
        <div className="mt-4 text-gray-200 sm:pr-8">
          
  
          <h5 className="mt-4 text-xl font-bold text-gray-300">Mr.{username}</h5>
  
          <p className="mt-2 text-sm">
           {content}
          </p>
        </div>
      </div>
  )
}

export default Cards