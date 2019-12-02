import React from 'react'

import NEWS from '../news.js'

export default props => {
  const { state, setTabFocus, isNarrow } = props
  const newsStories = () => {
    return NEWS.map(article=>{
      return (
        <div className='news-article' key={article.date}>
          <h2 className='title'>{article.title}</h2>
          <p className='date'>{article.date}</p>
          <p className='text'>{article.text}</p>
        </div>
      )
    })
  }
  const content = () => {
    return (
      <div className={ isOpen() ? 'content open' : 'content'}>
        { newsStories() }
      </div>
    )
  }

  const isOpen = () => {
    if (state.accordionTab === 'news') {return true}
    if (isNarrow) {return true}
    return false
  }


  return (
    <div className={isOpen() ? 'section open' : 'section'} onClick={()=>setTabFocus('news')}>
      <div className='section-title'>
        News
        <div className='accent-bar'/>
      </div>
      { isOpen() ? content() : null }
    </div>
  )
}
