import React, { useState, useEffect } from 'react'
import { GiSpaceship } from 'react-icons/gi'

import useGameState from './useGameState'
import './game.css'

export default () => {

  const handleKeyDown = event => {
    console.log(event.key, event.which);
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  const ship = () => {
    return <GiSpaceship className='ship' size='50px'/>
  }
  const game = document.querySelector('.game-window')
  if (game) console.log(game.getBoundingClientRect());
  return (
    <div className='game-window'>
      { ship() }
    </div>
  )
}
