const attack = {
  pinch: {
    damage: 10,
  }
}


let health = 100

function punch() {
  if (health != 0) {
    health -= attack.pinch.damage
    // } else (alert('he has died'))

    document.getElementById('health').innerText = health
  }
}