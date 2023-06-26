import './App.css'
import Papelito from './components/Papelito'
import frase from './data/frase.json'
import { useState } from 'react'
import Autor from './components/Autor'

function App() {

  const [index, setIndex] = useState(0)

  const sonido = document.querySelector('#sonido')

  const fondos = ['/fondos/f1.png', '/fondos/f2.png', '/fondos/f3.png', '/fondos/f4.png', '/fondos/f5.png', '/fondos/f6.png', '/fondos/f7.png', '/fondos/f8.png', '/fondos/f9.png', '/fondos/f10.png', '/fondos/f11.png', '/fondos/f12.png', '/fondos/f13.png', '/fondos/f14.png', '/fondos/f15.png',]

  const suerte = () => {
    setIndex(Math.floor(Math.random() * ((frase.length - 1) - 0 + 1)) + 0)
     
    sonido.innerHTML = '<audio src="./public/sonidos/sg.mp3" autoPlay></audio>'
  }
  
  document.body.style = `background: url(${fondos[index]}) no-repeat center center fixed;
  background-size: cover;
  text-align: center;`

  return (
    <> 
      <Papelito
      data={ frase[index] }
      />

      <button className='btn1' onClick={suerte}>PROBAR MI SUERTE</button>

      <Autor
      data={ frase[index] }
      />
      <div id='sonido'></div>
    </>
  )
}
// https://main--comfy-lamington-10754f.netlify.app/
export default App
