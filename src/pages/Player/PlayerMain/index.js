import React, { useState } from 'react'
// import PlayerMainCard1 from './PlayerMainCard1'
// import PlayerMainCard2 from './PlayerMainCard2'
// import PlayerMainBoard from './PlayerMainBoard'

function PlayerMain() {
  const [redScore, setRedScore] = React.useState(0);
  const [yellowScore, setYellowScore] = React.useState(0);

  let playerRed = "R";
  let playerYellow = "Y";
  let currPlayer = playerRed;

  // let redScore=0;
  // let yellowScore=0;

  let gameOver = false;
  let board;

  let rows = 6;
  let columns = 7;
  let currColumns = []; //keeps track of which row each column is at.

  // setGame();
  window.onload = function() {
      setGame();
  }

  function setGame() {
      board = [];
      currColumns = [5, 5, 5, 5, 5, 5, 5];

      for (let r = 0; r < rows; r++) {
          let row = [];
          for (let c = 0; c < columns; c++) {
              // JS
              row.push(' ');
              // HTML
              let tile = document.createElement("div");
              tile.id = r.toString() + "-" + c.toString();
              tile.classList.add("tile");
              tile.addEventListener("click", setPiece);
              // tile.onclick = function(){
              //     alert('here be dragons');return false;
              // };
              document.getElementById("board").append(tile);
          }
          board.push(row);
      }
  }

  function setPiece() {
      if (gameOver) {
          return;
      }

      //get coords of that tile clicked
      let coords = this.id.split("-");
      let r = parseInt(coords[0]);
      let c = parseInt(coords[1]);

      // figure out which row the current column should be on
      r = currColumns[c]; 

      if (r < 0) { // board[r][c] != ' '
          return;
      }

      board[r][c] = currPlayer; //update JS board
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      if (currPlayer === playerRed) {
          tile.classList.add("red-piece");
          currPlayer = playerYellow;
      }
      else {
          tile.classList.add("yellow-piece");
          currPlayer = playerRed;
      }

      r -= 1; //update the row height for that column
      currColumns[c] = r; //update the array

      checkWinner();
  }

  function checkWinner() {
      // horizontal
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

      // vertical
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

      // anti diagonal
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

      // diagonal
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
      let cardHead = document.getElementById("card-head");
      let cardBody = document.getElementById("card-body");
      if (board[r][c] === playerRed) {
          cardHead.innerHTML = "Player 1"
          setRedScore(redScore + 1);
      } else {
          cardHead.innerHTML = "Player 2"
          setYellowScore(yellowScore + 1);
      }
      cardBody.innerText = "Wins";             
      card.style.color="#000"
      gameOver = true;
  }
  return (
    <div className='PlayerMain'>
        <div className='PlayerMainCard1 PlayerMainCard'>
            <p>player 1</p>
            <h1>0</h1>
        </div>
        <div className='PlayerMainBoard'>
          <div id="board">
            <div id="card">
              <p id="card-head">Player 1</p>
              <h1 id="card-body">30</h1>
            </div>
          </div>
        </div>
        <div className='PlayerMainCard2 PlayerMainCard'>
            <p>player 2</p>
            <h1>0</h1>
        </div>
    </div>
  )
}

export default PlayerMain