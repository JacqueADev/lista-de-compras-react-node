import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Home() {
 function cliqueiNoBotao(){
  console.log("Cliquei")
 }
  return (
    <div>
      <h1>Comprar:</h1>
      <input placeholder="Produto..." type="text" />
      <button onClick={cliqueiNoBotao} >Adicionar a lista</button>
    </div>
  )
}

export default Home
