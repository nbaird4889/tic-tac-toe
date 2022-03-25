import './App.css';
import {useState} from 'react'
import Square from "./components/Square.js"
import { calculateWinner } from './components/Patterns';


function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])
  const [player, setPlayer] = useState("X")
  const winner = calculateWinner(board)


  const chooseSquare = (square) => {
    setBoard(board.map((val, idx) => {
      if (idx === square && val === "") {
        return player
      }
      return val
    }));
    

    if (player === "X") {
      setPlayer("O")
    } else {
      setPlayer("X")
    }

  }

  return (
    <div className="App">
      <div className="board">
          <Square 
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0)
            }}
          />
          <Square 
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1)
            }}
          />
          <Square 
          val={board[2]}
          chooseSquare={() => {
            chooseSquare(2)
          }}
          />
          <Square 
            val={board[3]}
            chooseSquare={() => {
              chooseSquare(3)
            }}
          />
          <Square 
            val={board[4]}
            chooseSquare={() => {
              chooseSquare(4)
            }}
          />
          <Square 
            val={board[5]}
            chooseSquare={() => {
              chooseSquare(5)
            }}
          />
          <Square 
            val={board[6]}
            chooseSquare={() => {
              chooseSquare(6)
            }}
          />
          <Square 
            val={board[7]}
            chooseSquare={() => {
              chooseSquare(7)
            }}
          />
          <Square 
            val={board[8]}
            chooseSquare={() => {
              chooseSquare(8)
            }}
          />
          <button onClick={() => {setBoard(["", "", "", "", "", "", "", "", ""])}}>Start New Game</button>
          <p>The winner is: {winner}</p>
      </div>
    </div>
  );
}

export default App;
