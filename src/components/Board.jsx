import { useState, useEffect } from 'react'
import Square from './Square.jsx'
import { calculateWinner, getAIMove } from '../utils/gameUtils.js'

function Board() {
  const [gameMode, setGameMode] = useState('1P')
  const [xIsNext, setXisNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleSquareClick(i) {
    if (squares[i] || calculateWinner(squares)) return
    if (gameMode === '1P' && !xIsNext) return

    const newSquares = squares.slice()
    newSquares[i] = xIsNext ? 'X' : 'O'
    setSquares(newSquares)
    setXisNext(!xIsNext)

  }

  const result = calculateWinner(squares)
  const winner = result?.winner
  const winningLine = result?.line || []
  const isDraw = !winner && squares.every((square) => square !== null)

  let status
  if (winner) {
    status = "Winner: " + winner
  } else if (isDraw) {
    status = "Game Draw!"
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O")
  }

  useEffect(() => {
    if (gameMode === '1P' && !xIsNext && !winner && squares.includes(null)) {
      const timer = setTimeout(() => {
        const aiMove = getAIMove(squares)
        if (aiMove !== null) {
          const nextMove = squares.slice()
          nextMove[aiMove] = 'O'
          setSquares(nextMove)
          setXisNext(true)
        }
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [squares, gameMode, xIsNext, winner])

  const resetGame = (mode) => {
    setGameMode(mode)
    setSquares(Array(9).fill(null))
    setXisNext(true)
  }

  return (
    <div className="game-container">
      <h1 className="title">Tic Tac Toe</h1>
      <div className="mode-selector">
        <button className={gameMode === '1P' ? 'mode-btn active' : 'mode-btn'} onClick={() => resetGame('1P')}>1 PLAYER</button>
        <button className={gameMode === '2P' ? "mode-btn active" : "mode-btn"} onClick={() => resetGame('2P')}>2 PLAYERS</button>
      </div>
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((value, idx) => (
          <Square key={idx} value={value} onSquareClick={() => handleSquareClick(idx)} isWinning={winningLine.includes(idx)} />
        ))}
      </div>
      {(isDraw || winner) && <button className="reset-btn" onClick={() => resetGame(gameMode)}>PLAY AGAIN</button>}
    </div>
  )
}

export default Board