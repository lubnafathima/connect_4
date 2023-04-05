import React from 'react'
import { Link } from 'react-router-dom';
import { TiTick} from 'react-icons/ti';
function index() {
  return (
    <div className='Rules'>
      <div className='Rules-cont'>
        <h1>Rules</h1>
        <h2>Objective</h2>
        <p>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally)</p>
        <h2>how to play</h2>
        <ol>
          <li>Red goes first in the first game.</li>
          <li>Players must alternate turns and only one disc can be dropped in each turn.</li>
          <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
          <li>The starter of the previous game goes second on the next game.</li>
        </ol>
        <span>
          <Link to='/'>
            <TiTick color="white" />
          </Link>
        </span>
      </div>
    </div>
  )
}

export default index