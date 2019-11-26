import React from 'react'
import { FaEye, FaGithub } from 'react-icons/fa'

import PROJECTS from '../projects.js'

export default props => {
  const { state, dispatch, setTabFocus } = props
  const projectCards =() => {
    return PROJECTS.map(project=>{
      return (
        <div className='project-card' key={project.name}>
          <div className='project-name'>{project.name}</div>
          <div className='project-description'>{project.description}</div>
          <div className='links'>
            { project.live_link ? <a className='live-link' href={project.live_link}><FaEye size={25} /></a> : null }
            { project.github_link ? <a className='live-link' href={project.github_link}><FaGithub size={25} /></a> : null }
          </div>
        </div>
      )
    })
  }
  const content = () => {
    return (
      <div className={state.accordionTab === 'projects' ? 'content open' : 'content'}>
        { projectCards() }
      </div>
    )
  }
  return (
    <div
      className={state.accordionTab === 'projects' ? 'section open' : 'section'}
      onClick={()=>setTabFocus('projects')}>
      <div className='section-title'>
        Projects
        <div className='accent-bar'/>
      </div>
      { state.accordionTab === 'projects' ? content() : null }
    </div>
  )
}
