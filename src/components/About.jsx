import React from 'react'

export default props => {
  const { state, dispatch, setTabFocus } = props
  const content = () => {
    return (
      <div className={state.accordionTab === 'about' ? 'content open' : 'content'}>
        Content
      </div>
    )
  }
  return (
    <div className={state.accordionTab === 'about' ? 'section open' : 'section'} onClick={()=>setTabFocus('about')}>
      <div className='section-title'>Game</div>
      { content() }
    </div>
  )
}
