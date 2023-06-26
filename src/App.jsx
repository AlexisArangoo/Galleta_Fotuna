import './App.css'
import Papelito from './components/Papelito'
import frase from './data/frase.json'
import { useState } from 'react'

function App() {

  const [index, setIndex] = useState(0)

  const fondos = ['/public/fondos/f1.png', '/public/fondos/f2.png', '/public/fondos/f3.png', '/public/fondos/f4.png', '/public/fondos/f5.png', '/public/fondos/f6.png', '/public/fondos/f7.png', '/public/fondos/f8.png', '/public/fondos/f9.png', '/public/fondos/f10.png', '/public/fondos/f11.png', '/public/fondos/f12.png', '/public/fondos/f13.png', '/public/fondos/f14.png', '/public/fondos/f15.png',]

  const suerte = () => {
    setIndex(Math.floor(Math.random() * ((frase.length - 1) - 0 + 1)) + 0)
  }
  
  document.body.style = `background: url(${fondos[index]}) no-repeat center center fixed;
  background-size: cover;
  text-align: center;`

  return (
    <> 
      <Papelito
      data={ frase[index] }
      />

      <button onClick={suerte}>PROBAR MI SUERTE</button>

    </>
  )
}

export default App
