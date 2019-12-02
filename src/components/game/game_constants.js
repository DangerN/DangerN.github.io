import React from 'react'

import Block from './Block'

const U = {
  randRange: range => {
    return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min
  }
}

const GC = {
  MOVE_DIS: 5,
  MOVE_KEYS: ['up','down','left','right'],
  BULLET_SPEED: 10,
  gameKeys: keyCode => {
    const allowedKeys = {
      87: 'up',
      65: 'left',
      83: 'down',
      68: 'right',
      32: 'fire',
      13: 'confirm',
      8: 'cancel'
    }
    return Object.keys(allowedKeys).includes(keyCode.toString()) ? allowedKeys[keyCode] : 'invalid'
  },
  clampShipPos: (position, range) => {
    if (position.x > range.x2) { position.x = range.x2}
    if (position.x < range.x1) { position.x = range.x1}
    if (position.y > range.y2) { position.y = range.y2}
    if (position.y < range.y1) { position.y = range.y1}
    //okie dokie
  },
  up: position => {
    position.y -= GC.MOVE_DIS
  },
  down: position => {
    position.y += GC.MOVE_DIS
  },
  left: position => {
    position.x -= GC.MOVE_DIS
  },
  right: position => {
    position.x += GC.MOVE_DIS
  },
  fire: () => {
    console.log('pew pew')
  },
  createActorProps: {
    asteroid: key => {
      const startX = 10 * U.randRange({min: -2, max: 50})
      const startSize = U.randRange({min: 40, max: 200})
      return {x: startX, y: -200, size: startSize, type: 'asteroid', key: key}
    }


  },
  actorMap: {
    asteroid: actor => {
      const { x, y, size, key } = actor
      return <Block key={key} size={size} style={{top: `${y}px`, left: `${x}px`}} />
    },
  },
  // mutates actors
  processActors: actors => {
    const actorProcess = {
      asteroid: actor => {
        actor.y += 2
      }
    }
    actors.forEach(actor => {
      actorProcess[actor.type](actor)
    })
  },
  // returns new array
  filterActors: actors => {
    const actorFilter = {
      asteroid: actor => {
        return actor.y < 500
      }
    }
    return actors.filter(actor => {
      return actorFilter[actor.type](actor)
    })
  },
  detectCollision: props => {
    const { shipPos, actors } = props
    let shipCollide = false
    actors.forEach(actor => {
      const actXSpan = actor.x + actor.size
      const actYSpan = actor.y + actor.size
      const shipXSpan = shipPos.x + 50
      const shipYSpan = shipPos.y + 50
      if (
        shipPos.x + 10 > actXSpan
        || actor.x > shipXSpan - 10
        || shipPos.y > actYSpan
        || actor.y > shipYSpan
      ) { return }
      shipCollide = true
    })
    return {'shipCollide': shipCollide}
  }
}

export default GC
