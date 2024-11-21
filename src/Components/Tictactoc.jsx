import React, { useRef, useState } from 'react';
import './Tictactoc.css';
import circle_icon from '../assets/circle.png';
import cross_icon from '../assets/cross.png';

let data = ["", "", "", "", "", "", "", "", ""];

export const Tictactoc = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);
  const boxRefs = Array(9).fill().map(() => useRef(null));

  const toggle = (e, num) => {
    if (lock || data[num] !== "") return;

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src= '${cross_icon}' alt='X' />`;
      data[num] = "X";
    } else {
      e.target.innerHTML = `<img src= '${circle_icon}' alt='O' />`;
      data[num] = "O";
    }

    setCount(count + 1);
    checkWin();
  };

  const checkWin = () => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const [a, b, c] of winPatterns) {
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        won(data[a]);
        return;
      }
    }

    if (count === 8) {
      titleRef.current.innerHTML = "It's a Draw!";
      setLock(true);
    }
  };

  const won = (winner) => {
    setLock(true);
    titleRef.current.innerHTML = `Congratulations: <img  src=${winner === "X" ? cross_icon : circle_icon} alt='${winner}'  class="winner-icon" /> Wins!`;
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    setCount(0);
    titleRef.current.innerHTML = 'Tic Tac Toe Game in React';
    boxRefs.forEach(ref => {
      ref.current.innerHTML = "";
    });
  };

  return (
    <div className='container'>
      <h1 className='Title' ref={titleRef}>Tic Tac Toe Game </h1>
      <div className='board'>
        {boxRefs.map((ref, index) => (
          <div key={index} className='boxes' ref={ref} onClick={(e) => toggle(e, index)}></div>
        ))}
      </div>
      <button className='reset' onClick={reset}>Reset</button>
    </div>
  );
};
