import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

}

function Card({nome, periodos, horarios, materias}) {
  return (
    <div style={{bacgroundColor: "#fff"}}>
      <p className="card__name">{nome}</p>
      <p className="card__name">{periodos}</p>
      <p className="card__name">{horarios}</p>
      <p className="card__name">{materias}</p>
    </div>
  )
}

function App() {
  return (
    <div classNAME="concept">
      <card nome="Engenharia de Software" periodos="5 periodos" />
      <card nome="Engenharia de Software" periodos="5 periodos" />
      <card nome="Engenharia de Software" periodos="5 periodos" />
    </div>
  )
}

export default App
