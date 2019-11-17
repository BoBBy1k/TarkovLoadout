var getBackpack = function(prop) {
  switch (prop) {
      case 0: return require('./assets/empty.png');
      case 1: return require('./assets/vest/01-3M.png');
      case 2: return require('./assets/vest/02-PACA.png');
      case 3: return require('./assets/vest/03-UNTAR.png');
      case 4: return require('./assets/vest/04-6B23-1.png');
      case 5: return require('./assets/vest/05-Zhuk-3_Press.png');
      case 6: return require('./assets/vest/06-Kirasa.png');
      case 7: return require('./assets/vest/07-Trooper.png');
      case 8: return require('./assets/vest/08-6B13_Assault.gif');
      case 9: return require('./assets/vest/09-6B23-2_Mountain.png');
      case 10: return require('./assets/vest/10-GZHEL.png');
      case 11: return require('./assets/vest/11-Redut-M.png');
      case 12: return require('./assets/vest/12-Gen4-HMK.png');
      case 13: return require('./assets/vest/13-6B13M_Killa.png');
      case 14: return require('./assets/vest/14-Gen4-Assault.png');
      case 15: return require('./assets/vest/15-Gen4-Full.png');
      default: return require('./assets/empty.png');
  }
}

var backpack_list = [
  {name: "None", icon: "assets/empty.png", size: 0, speed: 0, weight: 0},
  {name: "Sling", icon: "assets/backpack/01-Sling.png", size: 6, speed: 0, weight: .6},
  {name: "ArmyBag", icon: "assets/backpack/01-Sling.png", size: 8, speed: 0, weight: .8},
  {name: "T-Bag", icon: "assets/backpack/01-Sling.png", size: 9, speed: 0, weight: .7},
  {name: "Duffle", icon: "assets/backpack/01-Sling.png", size: 12, speed: 0, weight: .9},
  {name: "MBSS", icon: "assets/backpack/01-Sling.png", size: 16, speed: 0, weight: .7},
  {name: "Scav", icon: "assets/backpack/01-Sling.png", size: 20, speed: -8, weight: 1.1},
  {name: "Berkut", icon: "assets/backpack/01-Sling.png", size: 20, speed: 0, weight: .8},
  {name: "Tri-Zip", icon: "assets/backpack/01-Sling.png", size: 30, speed: -15, weight: 1.3},
  {name: "Beta2", icon: "assets/backpack/01-Sling.png", size: 30, speed: -10, weight: 1.1},
  {name: "Oakley", icon: "assets/backpack/01-Sling.png", size: 32, speed: -8, weight: 1.25},
  {name: "Pilgrim", icon: "assets/backpack/01-Sling.png", size: 35, speed: -28, weight: 1.5},
  {name: "Paratus", icon: "assets/backpack/01-Sling.png", size: 35, speed: -5, weight: 1.3},
  {name: "Attack2", icon: "assets/backpack/01-Sling.png", size: 35, speed: -20, weight: 1.3},
  {name: "BlackJack", icon: "assets/backpack/14-BlackJack.png", size: 42, speed: -30, weight: 1.2},
]

module.exports.backpack_list = backpack_list;
module.exports.getBackpack = getBackpack;