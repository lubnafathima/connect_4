import React from 'react'
import { Link } from 'react-router-dom';

function PlayerTop() {
  return (
    <div className='Player-top'>
        <Link to='/' style={{ textDecoration: 'none' }}><p>Quit</p></Link>
        <div className='Main-logo Player-logo'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to='/' style={{ textDecoration: 'none' }}><p>Restart</p></Link>
    </div>
  )
}

export default PlayerTop