import './App.css'
import Papelito from './components/Papelito'
import frase from './data/frase.json'
import Autor from './components/Autor'
import { useState, useEffect } from 'react'
import useSound from 'use-sound'
import sonido from './assets/sonidos/sg.mp3'

function App() {

  const [playSonido] = useSound(sonido)

  const [animacion, setAnimacion] = useState(false);

  const [index, setIndex] = useState(0)

  const fondos = ['/fondos/fondo-negro.png','/fondos/f1.png', '/fondos/f2.png', '/fondos/f3.png', '/fondos/f4.png', '/fondos/f5.png', '/fondos/f6.png', '/fondos/f7.png', '/fondos/f8.png', '/fondos/f9.png', '/fondos/f10.png', '/fondos/f11.png', '/fondos/f12.png', '/fondos/f13.png', '/fondos/f14.png', '/fondos/f15.png']

  const suerte = () => {
    setIndex(Math.floor(Math.random() * ((frase.length - 1) - 1 + 1)) + 1)
    playSonido()

    setAnimacion(true)

    setTimeout(() => {
      setAnimacion(false);
    }, 1000);
  } 
  
  document.body.style = `background: url(${fondos[index]}) no-repeat center center fixed;
  background-size: cover;
  text-align: center;`
  
  return (
    <> 
      <Papelito
      data={ frase[index] }
      animacion={ animacion }
      />

      <button className='btn1' onClick={suerte}>PROBAR MI SUERTE</button>

      <Autor
      data={ frase[index] }
      />
    </>
  )
}
// https://main--comfy-lamington-10754f.netlify.app/
export default App
