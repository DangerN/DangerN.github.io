import React from 'react'
// import useMediaQuery from 'use-media-query-hook'

import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default () => {

  return (
    <div className='header'>
      <div className='name'>
        Chris Neal
      </div>
      <div className='title'>
        Web App Developer
      </div>
      <div className='links'>
        <a className='link' href='https://github.com/DangerN'><FaGithub size='30'/></a>
        <a className='link' href='https://www.linkedin.com/in/chris-n/'><FaLinkedin size='30'/></a>
        <a className='link' href='mailto:cdneal091@gmail.com'><MdEmail size='30'/></a>
        <a className='link' href='https://docs.google.com/document/d/e/2PACX-1vTVNn6Z929E00UVH-FxgqQLidopid5iDr4AXJNhkbNoJJTjHpIntbUu4E4JbEy29YzNutS9x46WadL6/pub'><FaFileAlt size='30'/></a>
      </div>
    </div>
  )
}
