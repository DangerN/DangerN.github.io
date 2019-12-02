import React, { useState, useEffect } from 'react'
import { GiSpaceship } from 'react-icons/gi'

import Rocket from './Rocket'
import Overlay from './Overlay'

import useGameState from './useGameState'
import GC from './game_constants'
import './game.css'

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

  const renderActors = () => {
    return state.actors.map(actor=>{
      return GC.actorMap[actor.type](actor)
    })
  }

  return (
    <div className='game-window'>
      <Ship {...state} dispatch={dispatch} />
      { renderActors() }
      { state.paused ? <Overlay /> : null}
    </div>
  )
}

export default GameWindow
