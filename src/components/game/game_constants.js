
const GC = {
  MOVE_DIS: 5,
  MOVE_KEYS: ['up','down','left','right'],
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
  shipPosUpdate: (keysDown, shipPos) => {
    const keyActions = keysDown.filter(key=>GC.MOVE_KEYS.includes(key))
    const newShipPos = shipPos
    keyActions.forEach(action=>{
      GC[action](newShipPos)
    })
    return newShipPos
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
}

export default GC
