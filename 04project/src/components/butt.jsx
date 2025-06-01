import React from 'react'

function Butt( { colour , setc}) {

    let col="white";
    let bgshd= colour;

    if (colour==='Yellow') {
        col="black";
        bgshd="black";
    }
  return (
    <button
    onClick={setc}
    className= "outline-none px-7 py-2 rounded-full m-2 shadow-xl "
    style={{ backgroundColor: colour, color:` ${col}` , boxShadow: `0 1px 20px ${bgshd}` }}
  >
    {colour}
  </button>
  )
}

export default Butt