import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  // function changeColor(color) {
  //  setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex flex-row justify-center gap-3 bg-white rounded-3xl shadow-lg'>
          
          <button onClick={ () => (setColor('red'))} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'> Red </button>
          
          <button onClick={ () => (setColor('green'))} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'> Green </button>
          
          <button onClick={ () => (setColor('blue'))} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'> Blue </button>

        </div>

      </div>
    </div>
  )
}

export default App
