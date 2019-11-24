import React from 'react'

export default props => {
  const { state, dispatch, setTabFocus } = props
  const content = () => {
    return (
      <div className={state.accordionTab === 'news' ? 'content open' : 'content'}>
        Content
      </div>
    )
  }
  return (
    <div className={state.accordionTab === 'news' ? 'section open' : 'section'} onClick={()=>setTabFocus('news')}>
      <div className='section-title'>News</div>
      { content() }
    </div>
  )
}
