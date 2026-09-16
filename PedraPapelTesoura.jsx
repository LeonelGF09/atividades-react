import { useState } from 'react'

const OPCOES = [
  { id: 'pedra', label: 'Pedra', emoji: '✊' },
  { id: 'papel', label: 'Papel', emoji: '✋' },
  { id: 'tesoura', label: 'Tesoura', emoji: '✌️' },
]

const VENCE = {
  pedra: 'tesoura',
  tesoura: 'papel',
  papel: 'pedra',
}

function decidirVencedor(jogador, maquina) {
  if (jogador === maquina) return 'empate'
  return VENCE[jogador] === maquina ? 'jogador' : 'maquina'
}

function emojiDe(id) {
  return OPCOES.find((o) => o.id === id)?.emoji
}

function PedraPapelTesoura() {
  const [jogada, setJogada] = useState(null)
  const [jogadaMaquina, setJogadaMaquina] = useState(null)
  const [resultado, setResultado] = useState(null)
  const [placar, setPlacar] = useState({ jogador: 0, maquina: 0, empates: 0 })

  function jogar(idEscolhido) {
    const escolhaMaquina = OPCOES[Math.floor(Math.random() * OPCOES.length)].id
    const vencedor = decidirVencedor(idEscolhido, escolhaMaquina)

    setJogada(idEscolhido)
    setJogadaMaquina(escolhaMaquina)
    setResultado(vencedor)

    setPlacar((prev) => {
      if (vencedor === 'jogador') return { ...prev, jogador: prev.jogador + 1 }
      if (vencedor === 'maquina') return { ...prev, maquina: prev.maquina + 1 }
      return { ...prev, empates: prev.empates + 1 }
    })
  }

  return (
    <div className="card">
      <h2>Pedra, Papel e Tesoura</h2>

      <div className="escolhas">
        {OPCOES.map((o) => (
          <button key={o.id} className="escolha" onClick={() => jogar(o.id)} title={o.label}>
            {o.emoji}
          </button>
        ))}
      </div>

      {jogada && (
        <div className="rodada">
          <p>
            Você: {emojiDe(jogada)} vs Máquina: {emojiDe(jogadaMaquina)}
          </p>
          <p className="msg">
            {resultado === 'jogador' && 'Você venceu!'}
            {resultado === 'maquina' && 'O computador venceu.'}
            {resultado === 'empate' && 'Empate.'}
          </p>
        </div>
      )}

      <div className="placar">
        <span>Você: {placar.jogador}</span>
        <span>Empates: {placar.empates}</span>
        <span>Máquina: {placar.maquina}</span>
      </div>
    </div>
  )
}

export default PedraPapelTesoura
