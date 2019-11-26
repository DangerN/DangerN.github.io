import React, { useState, useEffect } from 'react'
import { GiSpaceship } from 'react-icons/gi'

import useGameState from './useGameState'
import GC from './game_constants'
import './game.css'

export const Controls = () => {
  return (
    <div className='controls'>
      <p>move - wasd</p>
      <p>fire - space</p>
      <p>cancel - backspace</p>
      <p>confirm - return</p>
    </div>
  )
}

const Ship = props => {
  const { shipPos } = props
  return (
    <div className='ship' style={{top: `${shipPos.y}px`, left: `${shipPos.x}px`}}>
      <GiSpaceship color={'#F2F3FC'} size='50px'/>
    </div>
  )
}

export const GameWindow = () => {
  const [ state, dispatch ] = useGameState()

  const handleKeyDown = event => {
    const key = GC.gameKeys(event.which)
    if (key === 'invalid') {return}
    dispatch({type: key, [key]: true})
  }

  const handleKeyUp = event => {
    const key = GC.gameKeys(event.which)
    if (key === 'invalid') {return}
    dispatch({type: key, [key]: false})
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  // const game = document.querySelector('.game-window')

  // if (game) console.log(game.getBoundingClientRect());

  return (
    <div className='game-window'>
      <Ship {...state} dispatch={dispatch} />
    </div>
  )
}
