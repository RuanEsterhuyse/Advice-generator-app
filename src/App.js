import { useState, useEffect } from "react"
import mobile from "./images/pattern-divider-mobile.svg"
import desktop from "./images/pattern-divider-desktop.svg"
import dice from "./images/icon-dice.svg"

function App() {
  const [text, setText] = useState([])

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    setText(data.slip)
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <div className="wrapper">
      <h1>Advice #{text.id}</h1>
      <p>{text.advice}</p>

      <picture>
        <source media="(min-width: 768px)" srcSet={desktop} />
        <img src={mobile} alt="" />
      </picture>

      <div>
        <button onClick={fetchAdvice}>
          <img src={dice} alt="" />
        </button>
      </div>
    </div>
  )
}

export default App