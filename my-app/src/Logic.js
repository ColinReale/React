import React, {useState} from "react";
import Board from "./Board";
import { calculateWinner} from "./helper";

const Logic = () => {
    // defining variables. implementing the useState hook to track state in the function. 
    // Keeping track of 9 squares on the board. filling it with null at the start because the board is empty at beginning of a game
    const [history, setHistory] = useState([Array(9).fill(null)])
    // setting stepNumber to tell us what step we are on, initially on step 0
    const [stepNumber, setStepNumber] = useState(0);
    // setting xIsNext 
    const [xIsNext, setXIsNext] = useState(true);
    // history is what I defined earlier. it's an array of all the steps we have taken.
    // this is what I will pass into calculateWinner to determine if a win has taken place
    const winner = calculateWinner(history[stepNumber]);
    // if X is next (if xIsNext = true), we pass X, if not, we pass O. Basically this is determining whose turn it is
    const xORo = xIsNext ? "X" : "O";
    // clicking on a square will pass the index
    const handleClick = (i) => {
        // a variable historyPoint which tells me everything from the beginning of the function to the present
        const historyPoint = history.slice(0, stepNumber + 1)
        // a variable current which sets itself at my current point in history
        const current = historyPoint[stepNumber];
        // this is a spread operator, which allows me to copy all of the values in the array within current
        const squares = [...current];
        // if you click on a square and there has already been a winner, it will just return
        // also if you click on a square that already has something in it, it will return
        if (winner || squares[i]) return;
        // select the square
        squares[i] = xORo;
        // all of the history before my current point plus the square I just clicked
        setHistory([...historyPoint, squares])
        // changing what step number we are on
        setStepNumber(historyPoint.length);
        // changing whose 'turn' it is to the other
        setXIsNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        // if the "turn number" is divisible by two, then it should be on O, and opposed to X
        setXIsNext(step % 2 === 0);
    }

    const renderMoves = () =>
    // mapping through each move, getting the index (move), and creating a destination for it. If move is not 0, then go to move #, if it is 0 then go to start.
    // returning a list item with key, and button onclick is going to be jumpto(move)
    // passing the destination into the button text
    history.map((_step, move) => {
        const destination = move ? `Go to move #${move}` : "Go to Start";
        return(
            <li key="{move}">
                <button onClick={() => jumpTo(move)}>{destination}</button>
            </li>
        );
    });
        return (
            <>
                <h1>TicTacToe in React</h1>
                <Board squares={history[stepNumber]} onClick={handleClick} />
                <div className="info-wrapper">
                    <div>
                    <h3>History</h3>
                    {renderMoves()}
                    </div>
                    <h3>
                        {winner ? "Winner: " + winner : "Next Player: " + xORo}
                    </h3>
                    </div>
            </>
        )
}

export default Logic;