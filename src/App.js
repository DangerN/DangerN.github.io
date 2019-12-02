import React from 'react'
import './css/App.css'

import Header from './components/Header.jsx'
import Accordion from './components/Accordion.jsx'

import useAppState from './useAppState.jsx'

export default () => {

  const [state, dispatch] = useAppState()

  

  return (
    <div id='app'>
      <Header />
      <Accordion state={state} dispatch={dispatch} />
    </div>
  )
}
