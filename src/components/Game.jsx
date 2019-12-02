import React from 'react'
import useMediaQuery from 'use-media-query-hook'

import GameWindow from './game/GameWindow'


export default props => {
  const { state, setTabFocus, isNarrow } = props
  const isDesktop = useMediaQuery('(min-width: 700px)')

  const content = () => {
    return (
      <div className={ isOpen() ? 'content open' : 'content'}>
        { isDesktop ? <GameWindow /> : 'Please visit on desktop to play.'}
      </div>
    )
  }

  const isOpen = () => {
    if (state.accordionTab === 'game') {return true}
    if (isNarrow) {return true}
    return false
  }

  return (
    <div className={ isOpen() ? 'section open' : 'section'} onClick={()=>setTabFocus('game')}>
      <div className='section-title'>
        Game
        <div className='accent-bar'/>
      </div>
      { isOpen() ? content() : null }
    </div>
  )
}
