import React from 'react'

export default props => {
  const { state, dispatch, setTabFocus } = props
  const content = () => {
    return (
      <div className={state.accordionTab === 'projects' ? 'content open' : 'content'}>
        Content
      </div>
    )
  }
  return (
    <div
      className={state.accordionTab === 'projects' ? 'section open' : 'section'}
      onClick={()=>setTabFocus('projects')}>
      <div className='section-title'>Projects</div>
      { content() }
    </div>
  )
}
