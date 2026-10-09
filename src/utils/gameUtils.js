
export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: line };
    }
  }
  return null;
}

export function getAIMove(squares) {
  const empty = squares.map((v, i) => (v === null ? i : null)).filter((v) => v !== null);
  if (empty.length === 0) return null;

  // 1. Try to win
  for (let i of empty) {
    const copy = squares.slice();
    copy[i] = 'O';
    if (calculateWinner(copy)?.winner === 'O') return i;
  }

  // 2. Try to block X
  for (let i of empty) {
    const copy = squares.slice();
    copy[i] = 'X';
    if (calculateWinner(copy)?.winner === 'X') return i;
  }

  // 3. Fallback to random move
  return empty[Math.floor(Math.random() * empty.length)];
}
