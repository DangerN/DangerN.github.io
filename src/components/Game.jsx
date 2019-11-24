import React from 'react'

export default props => {
  const { state, dispatch, setTabFocus } = props
  const content = () => {
    return (
      <div className={state.accordionTab === 'game' ? 'content open' : 'content'}>
        Content
      </div>
    )
  }
  return (
    <div className={state.accordionTab === 'game' ? 'section open' : 'section'} onClick={()=>setTabFocus('game')}>
      <div className='section-title'>Game</div>
      { content() }
    </div>
  )
}
