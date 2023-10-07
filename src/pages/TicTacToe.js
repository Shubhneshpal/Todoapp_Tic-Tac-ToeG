import React, { useState } from 'react'
import NavBar from '../Component/TodoApp/NavBar'
import Board from '../Component/Tictac/Board'
import Scoreboard from '../Component/Tictac/Scoreboard';




function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xPlaying, setXPlaying] = useState(true);
    const [xScore, setXScore] = useState(0);
    const [oScore, setOScore] = useState(0);
    const [tie, setTie] = useState('');
    const [gameOver, setGameOver] = useState(false);
    
  
    const WIN_CONDITIONS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    const handleBoxClick = (boxId) => {
      const updatedBoard = board.map((value, idx) => {
        if (idx === boxId) {
          return xPlaying === true ? "X" : "O";
        } else {
          return value;
        }
      });
  
      setBoard(updatedBoard);
      const winner = checkWinner(updatedBoard);
      setXPlaying(!xPlaying);
  
      if (winner) {
        if (winner === "X") {
          setXScore(xScore + 1);
          setGameOver(true);
        } else {
          setOScore(oScore + 1);
          setGameOver(true);
        }
      }
  
      let filled = true;
      updatedBoard.map((item) => {
        if (item === null) {
          filled = false;
          return filled;
        }
        return null;
      });
  
      if (filled && winner !== "X" && winner !== "O") {
        alert('It is a Tie')
        
      }
    };
  
    const checkWinner = (board) => {
      for (let i = 0; i < WIN_CONDITIONS.length; i++) {
        const [x, y, z] = WIN_CONDITIONS[i];
  
        
        if (board[x] && board[x] === board[y] && board[y] === board[z]) {
          return board[x];
        }
      }
    };
  
    const resetGame = () => {
      setGameOver(false);
      setBoard(Array(9).fill(null));
    };
  
    const resetAll = () => {
      setGameOver(false);
      setXScore(0);
      setOScore(0);
      setTie(0);
      setBoard(Array(9).fill(null));
    };
    
  return (
    <div>
    <NavBar/>

    <Scoreboard
        xScore={xScore}
        oScore={oScore}
        xPlaying={xPlaying}
        tie={tie}
      />
      <Board
        board={board}
        onClick={gameOver === true ? resetGame : handleBoxClick}
      />
      <div className="buttonR">
        <button onClick={resetGame}>Play Again</button>
        <button onClick={resetAll}>Reset</button>
      </div>   
  
    </div>
  )
}

export default TicTacToe
