import React from 'react'

import NEWS from '../news.js'

export default props => {
  const { state, dispatch, setTabFocus } = props
  const newsStories = () => {
    return NEWS.map(article=>{
      return (
        <div className='news-article'>
          <div className='title'>{article.title}</div>
          <div className='date'>{article.date}</div>
          <div className='text'>{article.text}</div>
        </div>
      )
    })
  }
  const content = () => {
    return (
      <div className={state.accordionTab === 'news' ? 'content open' : 'content'}>
        { newsStories() }
      </div>
    )
  }
  return (
    <div className={state.accordionTab === 'news' ? 'section open' : 'section'} onClick={()=>setTabFocus('news')}>
      <div className='section-title'>
        News
        <div className='accent-bar'/>
      </div>
      { content() }
    </div>
  )
}
