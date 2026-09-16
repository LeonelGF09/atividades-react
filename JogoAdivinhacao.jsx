import { useState } from 'react'

function gerarNumeroSecreto() {
  return Math.floor(Math.random() * 100) + 1
}

function JogoAdivinhacao() {
  const [numeroSecreto, setNumeroSecreto] = useState(gerarNumeroSecreto())
  const [palpite, setPalpite] = useState('')
  const [mensagem, setMensagem] = useState(null)
  const [tentativas, setTentativas] = useState(0)
  const [acertou, setAcertou] = useState(false)

  function tentar() {
    const n = parseInt(palpite, 10)

    if (isNaN(n) || n < 1 || n > 100) {
      setMensagem('Digite um número entre 1 e 100.')
      return
    }

    setTentativas((t) => t + 1)

    if (n === numeroSecreto) {
      setMensagem(`Acertou! O número era ${numeroSecreto}.`)
      setAcertou(true)
    } else if (n > numeroSecreto) {
      setMensagem('Muito alto.')
    } else {
      setMensagem('Muito baixo.')
    }
  }

  function reiniciar() {
    setNumeroSecreto(gerarNumeroSecreto())
    setPalpite('')
    setMensagem(null)
    setTentativas(0)
    setAcertou(false)
  }

  return (
    <div className="card">
      <h2>Jogo de Adivinhação</h2>

      <label htmlFor="palpite">Seu palpite (1–100)</label>
      <input
        id="palpite"
        type="number"
        value={palpite}
        onChange={(e) => setPalpite(e.target.value)}
        disabled={acertou}
        placeholder="Digite um número"
      />

      <div className="botoes">
        <button className="counter" onClick={tentar} disabled={acertou}>
          Tentar
        </button>
        <button className="counter counter--ghost" onClick={reiniciar}>
          Novo jogo
        </button>
      </div>

      {mensagem && <p className="msg">{mensagem}</p>}
      <p className="tentativas">Tentativas: {tentativas}</p>
    </div>
  )
}

export default JogoAdivinhacao
