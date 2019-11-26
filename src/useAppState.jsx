import { useReducer } from 'react'

export default () => {
  const initialState = {
    accordionTab: 'game'
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'accordionTab':
        return {...state, accordionTab: action.accordionTab}
      default:
        throw new Error('u fugged up lmao')
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, dispatch]
}
