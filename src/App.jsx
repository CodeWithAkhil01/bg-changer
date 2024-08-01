
import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [color, setColor] = useState("#FBBF24")

  return (
    <div className='ak' style={{backgroundColor:color}}>
  <div className='abc'>
      <h1 style={{color:"white"}}> Selected Color: {color}</h1>
    <div className='bar'>
          <button onClick={() => setColor("red")} className='red' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("green")} className='red' style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("blue")} className='red' style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("aqua")} className='red' style={{ backgroundColor: "aqua" }}>Aqua</button>
          <button onClick={() => setColor("black")} className='red' style={{ backgroundColor: "black" }}>Black</button>
          <button onClick={() => setColor("purple")} className='red' style={{ backgroundColor: "purple" }}>Purple</button>
          <button onClick={() => setColor("pink")} className='red' style={{ backgroundColor: "pink" }}>Pink</button>
          <button onClick={() => setColor("gold")} className='red' style={{ backgroundColor: "gold" }}>Gold</button>
          <button onClick={() => setColor("lime")} className='red' style={{ backgroundColor: "lime" }}>Lime</button>
          <button onClick={() => setColor("orange")} className='red' style={{ backgroundColor: "orange" }}>Orange</button>

    </div>
  </div>
 </div>
  )
}

export default App


