import React, { useReducer, useEffect } from 'react'

export default () => {
  const initialState = {
    paused: true,
    new: true,

  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'paused':
        return {...state, paused: action.paused}
      case 'new':
        return {...state, new: action.new}

      default:
        return {...state, [action.type]: action[action.type]}
        throw new Error('game fugged up lmao')
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, dispatch]
}
