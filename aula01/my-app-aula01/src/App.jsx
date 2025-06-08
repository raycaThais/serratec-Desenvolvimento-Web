import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // ARRAY
  const series = ['Black Mirror', "The Handmaid's Tale", "Stranger Things"];

  const numbers = [1,2,3]

  const array1 = numbers.map((i) => i * 2)
  console.log(array1)



  //return <h1>Olá Mundo</h1> 
  return (
<>
      {series.map((serie, index) => (
        <h1 key={index}>{serie}</h1>
      ))}
      <h1>Teste</h1>

      {numbers.filter((number) => number === 1)
      .map((number, index)=> ( 
      <p key={index}> (number)</p>
      ))}
    </>
    );
}

export default App
