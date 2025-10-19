import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center py-70'>
      <button className='bg-red-200'>
      Join room
      </button>
    </div>
    </>
  )
}

export default App
