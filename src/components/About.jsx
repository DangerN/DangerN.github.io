import React from 'react'

export default props => {
  const { state, dispatch, setTabFocus } = props
  const content = () => {
    return (
      <div className={state.accordionTab === 'about' ? 'content open' : 'content'}>

      </div>
    )
  }
  return (
    <div className={state.accordionTab === 'about' ? 'section open' : 'section'} onClick={()=>setTabFocus('about')}>
      <div className='section-title'>
        About
        <div className='accent-bar'/>
      </div>
      { content() }
    </div>
  )
}
