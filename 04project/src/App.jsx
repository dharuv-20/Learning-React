import { useState } from 'react'
import Butt from './components/butt'


function App() {
  const [color, setColor] = useState("olive")

 return (
    <div className='w-full h-screen' style={{ backgroundColor: color }}>
      
      
      <div className="fixed m-auto bottom-10 inset-x-0 flex justify-center bg-white px-4 py-2 rounded-xl flex-wrap w-fit shadow-2xl">
  

      <Butt colour="Blue"  setc={()=> setColor('blue')}/>
      <Butt colour="Red"  setc={()=> setColor('red')}/>
      <Butt colour="Green"  setc={()=> setColor('green')}/>
      <Butt colour="Yellow"  setc={()=> setColor('yellow')}/>

</div>


    </div>
  )
}

export default App
