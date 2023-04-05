import React from 'react'
import PlayerTop from './PlayerTop';
import PlayerMain from './PlayerMain';

function index() {
  return (
    <div className='Player'>
      <PlayerTop />
      <PlayerMain />
      <div className='bubble'></div>
    </div>
  )
}

export default index