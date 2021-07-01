const attack = {
  trebuchet: {
    damage: 30,
  },
  battering: {
    damage: 10,
  },
  eleph: {
    damage: 20,
  }
}

const castle = {

  walls: {
    defense: 50,
  },
  oil: {
    defense: 15,
  },
  archer: {
    defense: 25,
  }

}


let health = 100

function treb() {
  if (health != 0) {
    health -= attack.trebuchet.damage
    // } else (alert('he has died'))

    document.getElementById('health').innerText = health
  }
}