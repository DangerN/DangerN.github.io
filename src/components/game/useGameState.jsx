import React, { useReducer, useEffect, useState } from 'react'

import GC from './game_constants'

export default () => {
  const initialState = {
    paused: true,
    gameStatus: 'new',
    shipPos: {x: 175, y: 300},
    up: false,
    down: false,
    left: false,
    right: false,
    fire: false,
    confirm: false,
    cancel: false,
    frame: 0,
    actors: [],
    shipCollide: false,
  }

  const [ lastFrame, setLastFrame ] = useState(0)

  const reducer = (state, action) => {
    console.log(state.shipCollide);
    switch (action.type) {
      case 'newActor':
        const newActors = state.actors
        newActors.push(action.actor)
        return {...state, actors: newActors}
      case 'updateActors':
        const updatedActors = state.actors
        GC.processActors(updatedActors)
        return {
          ...state,
          ...GC.detectCollision({paused: state.paused, shipPos: state.shipPos, actors: updatedActors}),
          actors: GC.filterActors(updatedActors)
        }
      case 'frame':
        return state.paused ? state : {...state, frame: action.frame}
      case 'paused':
        return {...state, paused: action.paused}
      default:
        if (Object.keys(state).includes(action.type)) {
          return {...state, [action.type]: action[action.type]}
        }
        throw new Error('It\'s probably a typo in your dispatch')
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const tick = () => {
    dispatch({type: 'frame', frame: state.frame += 1})
  }

  useEffect(() => {
    const newShipPos = state.shipPos
    const allowedRange = {
      x1: 0,
      x2: 350,
      y1: 0,
      y2: 450
    }

    state.up && GC.up(newShipPos)
    state.down && GC.down(newShipPos)
    state.left && GC.left(newShipPos)
    state.right && GC.right(newShipPos)
    GC.clampShipPos(newShipPos, allowedRange)
    dispatch({type: 'shipPos', shipPos: newShipPos})

    state.fire && GC.fire()

    state.frame % 100 === 0 && dispatch({type: 'newActor', actor: GC.createActorProps.asteroid(state.frame)})

    console.log('frame', state.frame);

    dispatch({type: 'updateActors'})

  },[state.frame])

  useEffect(() => {

    state.confirm && dispatch({type: 'paused', paused: false})
  },[state.confirm])

  useEffect(() => {
    const tickInterval = setInterval(tick, 10)
    return () => {
      clearInterval(tickInterval)
    }
  }, [])

  return [state, dispatch]
}
