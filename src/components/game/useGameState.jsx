import { useReducer, useEffect } from 'react'

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

  const reducer = (state, action) => {
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
          ...GC.detectCollision({shipPos: state.shipPos, actors: updatedActors}),
          actors: GC.filterActors(updatedActors)
        }
      case 'frame':
        const newFrame = state.frame + 1
        return state.paused ? state : {...state, frame: newFrame}
      case 'paused':
        return {...state, paused: action.paused}
      case 'reset':
        return {...state, shipPos: {x: 175, y: 300}, frame: 0, actors: [], shipCollide: false, gameStatus: 'new'}
      default:
        if (Object.keys(state).includes(action.type)) {
          return {...state, [action.type]: action[action.type]}
        }
        throw new Error('It\'s probably a typo in your dispatch')
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

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

    //create a new asteroid every 100 frames
    state.frame % 100 === 0 && dispatch({type: 'newActor', actor: GC.createActorProps.asteroid(state.frame)})

    dispatch({type: 'updateActors'})

  },[state.frame])

  // handles user pressing enter/return.
  useEffect(() => {
    state.confirm && state.gameStatus === 'over' && dispatch({type: 'reset'})
    state.confirm && dispatch({type: 'paused', paused: false})
  },[state.confirm])

  // watches shipCollide to change gameStatus and paused.
  useEffect(() => {
    state.shipCollide && dispatch({type: 'gameStatus', gameStatus: 'over'})
    state.shipCollide && dispatch({type: 'paused', paused: true})
  },[state.shipCollide])

  // sets interval to increase frame count
  useEffect(() => {
    const tickInterval = setInterval(()=>dispatch({type: 'frame'}), 10)
    return () => {
      clearInterval(tickInterval)
    }
  }, [])

  return [state, dispatch]
}
