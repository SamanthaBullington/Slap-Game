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
    defense: 20,
  },
  archer: {
    defense: 10,
  }

}


let health = 100
//ATTACKS

function treb() {
  health -= attack.trebuchet.damage
  if (health < 0) {
    health = 0
    alert('we been breached')
  }

  document.getElementById('health').innerText = health
}

//DEFENSES
//INCREMENTS OF 5 STILL GO BELOW ZERO... HOW TO FIX?

function dump() {
  health += castle.oil.defense
  if (health > 100) {
    health = 100
  }
  document.getElementById('health').innerText = health
}