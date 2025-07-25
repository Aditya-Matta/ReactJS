import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    // counter += 1
    if(counter < 20){
      setCounter(counter + 1)
      // For adding 4 at a time by individual clicking
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
    }
  }

  const removeValue = () => {
    if(counter >0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addValue}
     >Add value {counter}</button>
     <br />
     <button
     onClick={removeValue}
     >Remove value {counter}</button>
     <p>Footer: {counter}</p>
    </>
  )
}

export default App
