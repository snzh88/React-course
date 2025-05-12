import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p className='text-red-600'>Testing tailwind</p>
        <Card username="hiteshhh"/>
        <Card />
      </div>
    </>
  )
}

export default App
