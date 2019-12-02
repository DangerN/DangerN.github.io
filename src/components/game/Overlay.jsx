import React from 'react'

export default props => {
  const { frame, gameStatus } = props
  console.log(gameStatus);
  const overlay = {
    new: (
      <>
        <p>Objective: Dodge!</p>
        <p>Move - WASD</p>
        <p>Start - Enter</p>
      </>
    ),
    over: (
      <>
        <p>Game Over!</p>
        <p>Score - {frame}</p>
        <p>Retry - Enter</p>
      </>
    )
  }
  return (
    <div className='overlay'>

      { overlay[gameStatus] }
    </div>
  )
}
