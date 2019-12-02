import React from 'react'

export default props => {
  const { state, dispatch, setTabFocus, isNarrow } = props
  const content = () => {
    return (
      <div className={isOpen() ? 'content open' : 'content'}>
        <div className='about'>
          <h2>Development</h2>
          <p>I broke into web development after graduating from Flatiron School mid 2019. I enjoy writing apps that are lightweight, functional, and attractive. I am interested in the future of AR web inegrations.</p>
          <h2>Life</h2>
          <p>Programmer, skater, gamer, cook, and van dweller. My dream is to explore the world in my van while developing remotely. I am determined to live an exciting, adventurous life!</p>
        </div>
      </div>
    )
  }

  const isOpen = () => {
    if (state.accordionTab === 'about') {return true}
    if (isNarrow) {return true}
    return false
  }

  return (
    <div className={isOpen() ? 'section open' : 'section'} onClick={()=>setTabFocus('about')}>
      <div className='section-title'>
        About
        <div className='accent-bar'/>
      </div>
      { isOpen() ? content() : null }
    </div>
  )
}
