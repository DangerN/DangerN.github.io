import React from 'react'

import About from './About'
import Projects from './Projects'
import News from './News'
import Game from './Game'

export default props => {
  const { state, dispatch } = props
  const setTabFocus = tab => {
    return dispatch({type: 'accordionTab', accordionTab: tab})
  }

  return (
    <div className='accordion'>
      <About setTabFocus={setTabFocus} {...props}/>
      <Projects setTabFocus={setTabFocus} {...props}/>
      <News setTabFocus={setTabFocus} {...props}/>
      <Game setTabFocus={setTabFocus} {...props}/>
    </div>
  )
}
