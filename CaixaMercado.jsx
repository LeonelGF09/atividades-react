import { useState } from 'react'

function CaixaMercado() {
  const [valor1, setValor1] = useState('')
  const [valor2, setValor2] = useState('')
  const [resultado, setResultado] = useState(null)

  function calcular() {
    const a = parseFloat(valor1)
    const b = parseFloat(valor2)

    if (isNaN(a) || isNaN(b)) {
      setResultado({ erro: true })
      return
    }

    setResultado({
      erro: false,
      soma: a + b,
      subtracao: a - b,
      multiplicacao: a * b,
      divisao: b !== 0 ? a / b : null,
    })
  }

  return (
    <div className="card">
      <h2>Caixa de Mercado</h2>

      <label htmlFor="valor1">Valor 1</label>
      <input
        id="valor1"
        type="number"
        value={valor1}
        onChange={(e) => setValor1(e.target.value)}
        placeholder="Ex: 10"
      />

      <label htmlFor="valor2">Valor 2</label>
      <input
        id="valor2"
        type="number"
        value={valor2}
        onChange={(e) => setValor2(e.target.value)}
        placeholder="Ex: 3"
      />

      <button className="counter" onClick={calcular}>
        Calcular
      </button>

      {resultado?.erro && <p className="msg msg--erro">Digite dois números válidos.</p>}

      {resultado && !resultado.erro && (
        <div className="resultados">
          <p>Soma: {resultado.soma}</p>
          <p>Subtração: {resultado.subtracao}</p>
          <p>Multiplicação: {resultado.multiplicacao}</p>
          <p>
            Divisão:{' '}
            {resultado.divisao === null
              ? 'indefinida (divisão por zero)'
              : resultado.divisao.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  )
}

export default CaixaMercado
