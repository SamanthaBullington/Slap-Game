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

let hits = 0
let health = 100



//ATTACKS

function treb() {
  hits++
  health -= attack.trebuchet.damage
  if (health < 0) {
    health = 0
    alert('we been breached')
  }

  document.getElementById('hits').innerText = hits
  document.getElementById('health').innerText = health
}

function ram() {
  hits++
  health -= attack.battering.damage
  if (health < 0) {
    health = 0
    alert('we been breached')
  }

  document.getElementById('hits').innerText = hits
  document.getElementById('health').innerText = health
}


function elephant() {
  hits++
  health -= attack.eleph.damage
  if (health < 0) {
    health = 0
    alert('we been breached')
  }
  document.getElementById('hits').innerText = hits
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

function fortify() {
  health += castle.walls.defense
  if (health > 100) {
    health = 100
  }
  document.getElementById('health').innerText = health
}

function shoot() {
  health += castle.archer.defense
  if (health > 100) {
    health = 100
  }
  document.getElementById('health').innerText = health
}