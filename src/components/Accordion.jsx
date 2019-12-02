import React from 'react'
import useMediaQuery from 'use-media-query-hook'

import About from './About'
import Projects from './Projects'
import News from './News'
import Game from './Game'

export default props => {
  const isNarrow = useMediaQuery('(max-width: 600px)')
  const { dispatch } = props
  const setTabFocus = tab => {
    return dispatch({type: 'accordionTab', accordionTab: tab})
  }

  return (
    <div className='accordion'>
      <About setTabFocus={setTabFocus} isNarrow={isNarrow} {...props}/>
      <Projects setTabFocus={setTabFocus} isNarrow={isNarrow} {...props}/>
      <News setTabFocus={setTabFocus} isNarrow={isNarrow} {...props}/>
      <Game setTabFocus={setTabFocus} isNarrow={isNarrow} {...props}/>
    </div>
  )
}
