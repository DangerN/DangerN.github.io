import React from 'react'
import { GiBrickWall } from 'react-icons/gi'

export default props => {
  return (
    <div className='asteroid' style={props.style} >
    <GiBrickWall color={'#707072'} size={props.size} />
    </div>
  )
}
