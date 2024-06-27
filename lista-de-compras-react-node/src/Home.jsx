import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Home() {
 
  return (
    <div>
      <h1>Comprar:</h1>
      <input placeholder="Produto..." type="text" />
      <button>Adicionar a lista</button>
    </div>
  )
}

export default Home
