import React from 'react'
import { GiAsteroid, GiBrickWall } from 'react-icons/gi'

export default props => {
  // <GiAsteroid size={props.size} />
  return (
    <div className='asteroid' style={props.style} >
    <GiBrickWall size={props.size} />
    </div>
  )
}
