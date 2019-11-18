var getArmoredRig = function(prop) {
  switch (prop) {
      case 0: return require('./assets/empty.png');
      case 1: return require('./assets/armoredrig/01-6B5-16.png');
      case 2: return require('./assets/armoredrig/02-6B5-15.png');
      case 3: return require('./assets/armoredrig/03-6B3TM-01M.png');
      case 4: return require('./assets/armoredrig/04-M2.png');
      case 5: return require('./assets/armoredrig/05-M1.png');
      case 6: return require('./assets/armoredrig/06-AVS.png');
      case 7: return require('./assets/armoredrig/07-TV-110.png');
      case 8: return require('./assets/armoredrig/08-A18.gif');
      case 9: return require('./assets/armoredrig/09-Tactec.png');
      default: return require('./assets/empty.png');
  }
}

var getArmoredRigStorage = function(prop) {
  switch (prop) {
      case 0: return require('./assets/empty.png');
      case 1: return require('./assets/armoredrig/01-6B5-16slots.png');
      case 2: return require('./assets/armoredrig/02-6B5-15slots.png');
      case 3: return require('./assets/armoredrig/03-6B3TM-01Mslots.png');
      case 4: return require('./assets/armoredrig/04-M2slots.png');
      case 5: return require('./assets/armoredrig/05-M1slots.png');
      case 6: return require('./assets/armoredrig/06-AVSslots.png');
      case 7: return require('./assets/armoredrig/07-TV-110slots.png');
      case 8: return require('./assets/armoredrig/08-A18slots.gif');
      case 9: return require('./assets/armoredrig/09-Tactecslots.png');
      default: return require('./assets/empty.png');
  }
}

var armoredrig_list = [
  {name: "6B5-16", icon: "assets/armoredrig/01-6B5-16.png", class: 3, durability: 70, material: "Titan", speed: -9, turn: -5, ergo: -12, slots: "Chest and Stomach", slots: 10, weight: 7.1},
  {name: "6B5-15", icon: "assets/armoredrig/02-6B5-15.png", class: 4, durability: 45, material: "Ceramic", speed: -14, turn: -7, ergo: -12, zones: "Chest and Stomach", slots: 10, weight: 12.2},
  {name: "6B3TM", icon: "assets/armoredrig/03-6B3TM-01M.png", class: 4, durability: 30, material: "Titan", speed: -10, turn: -5, ergo: -15, zones: "Chest and Stomach", slots: 12, weight: 8.2},
  {name: "M2", icon: "assets/armoredrig/04-M2.png", class: 4, durability: 40, material: "Titan", speed: -8, turn: -5, ergo: -2, zones: "Chest and Stomach", slots: 18, weight: 7},
  {name: "M1", icon: "assets/armoredrig/05-M1.png", class: 4, durability: 45, material: "Titan", speed: -10, turn: -5, ergo: -5, zones: "Chest and Stomach", slots: 20, weight: 8.3},
  {name: "AVS", icon: "assets/armoredrig/06-AVS.png", class: 4, durability: 50, material: "Combined", speed: -10, turn: -2, ergo: -2, zones: "Chest and Stomach", slots: 1, weight: 4.1},
  {name: "TV-110", icon: "assets/armoredrig/07-TV-110.png", class: 4, durability: 60, material: "Steel", speed: -8, turn: -4, ergo: -5, zones: "Chest", slots: 23, weight: 9.3},
  {name: "A18", icon: "assets/armoredrig/08-A18.gif", class: 4, durability: 80, material: "Combined", speed: -7, turn: -4, ergo: -6, zones: "Chest", slots: 25, weight: 7.4},
  {name: "Tactec", icon: "assets/armoredrig/09-Tactec.png", class: 5, durability: 40, material: "UHMWPE", speed: -7, turn: -3, ergo: -3, zones: "Chest", slots: 18, weight: 5},
]

module.exports.armoredrig_list = armoredrig_list;
module.exports.getArmoredRig = getArmoredRig;
module.exports.getArmoredRigStorage = getArmoredRigSlots;