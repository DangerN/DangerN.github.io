import React from 'react'
import useMediaQuery from 'use-media-query-hook'

import GameWindow from './game/GameWindow'


export default props => {
  const { state, dispatch, setTabFocus } = props
  const isDesktop = useMediaQuery('(min-width: 700px)')
  const content = () => {
    return (
      <div className={state.accordionTab === 'game' ? 'content open' : 'content'}>
        { isDesktop ? <GameWindow /> : 'Please visit on computer to play.'}
      </div>
    )
  }
  return (
    <div className={state.accordionTab === 'game' ? 'section open' : 'section'} onClick={()=>setTabFocus('game')}>
      <div className='section-title'>
        Game
        <div className='accent-bar'/>
      </div>
      { state.accordionTab === 'game' ? content() : null}
    </div>
  )
}
