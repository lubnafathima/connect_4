import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { BsFillEmojiSmileFill } from 'react-icons/bs';

function Player() {

    const [visible, setVisible] = React.useState(false);

  let playerRed = "R";
  let playerYellow = "Y";
  let currPlayer = playerRed;

  let gameOver = false;
  let board;

  let rows = 6;
  let columns = 7;
  let currColumns = []; 

  function setGame() {
      board = [];
      currColumns = [5, 5, 5, 5, 5, 5, 5];

      for (let r = 0; r < rows; r++) {
          let row = [];
          for (let c = 0; c < columns; c++) {
              row.push(' ');
              let tile = document.createElement("div");
              tile.id = r.toString() + "-" + c.toString();
              tile.classList.add("tile");
              tile.addEventListener("click", setPiece);
              document.getElementById("board").append(tile);
          }
          board.push(row);
      }
  }

//   useEffect(()=>{
//         setGame()
//     },[])

  function setPiece() {
      if (gameOver) {
          return;
      }

      let coords = this.id.split("-");
      let r = parseInt(coords[0]);
      let c = parseInt(coords[1]);

      r = currColumns[c]; 

      if (r < 0) {
          return;
      }

      board[r][c] = currPlayer;
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      if (currPlayer === playerRed) {
          tile.classList.add("red-piece");
          currPlayer = playerYellow;
      }
      else {
          tile.classList.add("yellow-piece");
          currPlayer = playerRed;
      }

      r -= 1;
      currColumns[c] = r;

      checkWinner();
  }

  function checkWinner() {
      for (let r = 0; r < rows; r++) {
          for (let c = 0; c < columns - 3; c++){
              if (board[r][c] !== ' ') {
                  if (board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]) {
                      setWinner(r, c);
                      return;
                  }
              }
          }
      }

      for (let c = 0; c < columns; c++) {
          for (let r = 0; r < rows - 3; r++) {
              if (board[r][c] !== ' ') {
                  if (board[r][c] === board[r+1][c] && board[r+1][c] === board[r+2][c] && board[r+2][c] === board[r+3][c]) {
                      setWinner(r, c);
                      return;
                  }
              }
          }
      }

      for (let r = 0; r < rows - 3; r++) {
          for (let c = 0; c < columns - 3; c++) {
              if (board[r][c] !== ' ') {
                  if (board[r][c] === board[r+1][c+1] && board[r+1][c+1] === board[r+2][c+2] && board[r+2][c+2] === board[r+3][c+3]) {
                      setWinner(r, c);
                      return;
                  }
              }
          }
      }

      for (let r = 3; r < rows; r++) {
          for (let c = 0; c < columns - 3; c++) {
              if (board[r][c] !== ' ') {
                  if (board[r][c] === board[r-1][c+1] && board[r-1][c+1] === board[r-2][c+2] && board[r-2][c+2] === board[r-3][c+3]) {
                      setWinner(r, c);
                      return;
                  }
              }
          }
      }
  }

  function setWinner(r, c) {
      let card = document.getElementById("card");
    //   let cardHead = document.getElementById("card-head");
    //   let cardBody = document.getElementById("card-body");
      if (board[r][c] === playerRed) {
          card.innerHTML = `Player 1 <br> Wins`
          card.style.background = "#FE6687";
        } else {
          card.innerHTML = "Player 2 Wins"
          card.style.background = "#FFCE6B";
      }
    //   cardBody.innerText = "Wins";             
      card.style.border = ".2rem solid #000";
      card.style.boxShadow = "0 .5rem 2px -2px #000";
      gameOver = true;
  }

  return (
    <div className='Player'>
      <div className='Player-top'>
        <Link to='/' style={{ textDecoration: 'none' }}><p>Quit</p></Link>
        <div className='Main-logo Player-logo'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="#" onClick={() => { setGame(); setVisible(!visible);}}>{visible ? '' : 'Start'}</a>
        {/* <p id='start' onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}start</p> */}
    </div>
    <div className='PlayerMain'>
      <div style={{display: visible ? 'block' : 'none'}} className='PlayerMainCard1 PlayerMainCard'>
          <p>player 1</p>
          <h1><BsFillEmojiSmileFill /></h1>
      </div>
      <div style={{display: visible ? 'block' : 'none'}} className='PlayerMainBoard'>
        <div id="board">
          <div id="card">
            {/* <p id="card-head">Player 1</p>
            <h1 id="card-body">30</h1> */}
          </div>
        </div>
      </div>
      <div style={{display: visible ? 'block' : 'none'}} className='PlayerMainCard2 PlayerMainCard'>
          <p>player 2</p>
          <h1><BsFillEmojiSmileFill /></h1>
      </div>
    </div>
      <div className='bubble'></div>
    </div>
  )
}

export default Player