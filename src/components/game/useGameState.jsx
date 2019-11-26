import React, { useReducer, useEffect } from 'react'

import GC from './game_constants'

export default () => {
  const initialState = {
    paused: true,
    new: true,
    shipPos: {x: 0, y: 0},
    up: false,
    down: false,
    left: false,
    right: false,
    frame: 0
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'up':
        return {...state, up: action.up}
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
    console.log(state.up);
    console.log(state.frame);
  },[state])

  useEffect(() => {
    const tickInterval = setInterval(tick, 400)
    return () => {
      clearInterval(tickInterval)
    }
  }, [])

  return [state, dispatch]
}
