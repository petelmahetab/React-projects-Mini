import React, { useState, useEffect } from 'react';

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // Initialize 9 squares
  const [isXNext, setIsXNext] = useState(true); // Track if it's X's turn or O's turn
  const [winner, setWinner] = useState(null); // Track the Winner

  // Winning combinations: rows, columns, diagonals
  const winningCombinations = [
    [0, 1, 2], // row 1
    [3, 4, 5], // row 2
    [6, 7, 8], // row 3
    [0, 3, 6], // column 1
    [1, 4, 7], // column 2
    [2, 5, 8], // column 3
    [0, 4, 8], // diagonal 1
    [2, 4, 6], // diagonal 2
  ];

  // Function to check if a player has won
  const checkWinner = (squares) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Return 'X' or 'O' as the winner
      }
    }
    return null;
  };

  // Handle the click event for each square
  const handleClick = (index) => {
    if (squares[index] || winner) return; // Ignore if the square already has a value or if the game is over

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    
    setSquares(newSquares); // Update the squares state
    setIsXNext(!isXNext); // Toggle between X and O
  };

  // Check for winner whenever squares change
  useEffect(() => {
    const gameWinner = checkWinner(squares);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  }, [squares]); // Re-run when squares state changes

  // Function to render each square
  const renderSquare = (index) => (
    <Square value={squares[index]} onClick={() => handleClick(index)} />
  );

  // Status message (winner, draw, or next player)
  const renderStatus = () => {
    if (winner) {
      return <h2>Winner is: {winner}</h2>;
    } else if (!squares.includes(null)) {
      return <h2>This Match Is a Draw...</h2>;
    } else {
      return <h2>Next player: {isXNext ? 'X' : 'O'}</h2>;
    }
  };

  return (
    <>
      <h1>TIC-TAC-TOE</h1>
      <div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <div className="status">{renderStatus()}</div>
      </div>
    </>
  );
}

export default Board;
