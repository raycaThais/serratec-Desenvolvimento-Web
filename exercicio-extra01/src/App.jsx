import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Rotas } from './routes/Routes/Rotas'

function App() {

  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>



  )
}

export default App
