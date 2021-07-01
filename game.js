const attack = {
  pinch: {
    damage: 10,
  }
}


let health = 100

function punch() {
  health -= attack.pinch.damage


  console.log(health)
}

punch()