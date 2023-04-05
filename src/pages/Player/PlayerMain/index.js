import React from 'react'
import PlayerMainCard1 from './PlayerMainCard1'
import PlayerMainCard2 from './PlayerMainCard2'
import PlayerMainBoard from './PlayerMainBoard'

function PlayerMain() {
  return (
    <div className='PlayerMain'>
        <PlayerMainCard1 />
        <PlayerMainBoard />
        <PlayerMainCard2 />
    </div>
  )
}

export default PlayerMain