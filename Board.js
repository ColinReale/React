import React from "react";
import Square from "./Squares";

// props being passed here are squares and onClick
const Board = ({ squares, onClick}) => (
  // calling the CSS class 'board'
  <div className="board">
    {/* this will map over each square, then pass the square into the square component as well as the index*/}
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
    </div>
);

export default Board;




























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
