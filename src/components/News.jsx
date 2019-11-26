import React from 'react'

import NEWS from '../news.js'

export default props => {
  const { state, dispatch, setTabFocus } = props
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
      { state.accordionTab === 'news' ? content() : null }
    </div>
  )
}
