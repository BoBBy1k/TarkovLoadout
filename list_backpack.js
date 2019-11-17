var getBackpack = function(prop) {
  switch (prop) {
      case 0: return require('./assets/empty.png');
      case 1: return require('./assets/backpack/01-Sling.png');
      case 2: return require('./assets/backpack/02-ArmyBag.png');
      case 3: return require('./assets/backpack/03-TBag.png');
      case 4: return require('./assets/backpack/04-Duffle.png');
      case 5: return require('./assets/backpack/05-MBSS.png');
      case 6: return require('./assets/backpack/06-Scav.png');
      case 7: return require('./assets/backpack/07-Berkut.png');
      case 8: return require('./assets/backpack/08-TriZip.gif');
      case 9: return require('./assets/backpack/09-Beta2.png');
      case 10: return require('./assets/backpack/10-Oakley.png');
      case 11: return require('./assets/backpack/11-Pilgrim.png');
      case 12: return require('./assets/backpack/12-Paratus.png');
      case 13: return require('./assets/backpack/13-Attack2.png');
      case 14: return require('./assets/backpack/14-BlackJack.png');
      default: return require('./assets/empty.png');
  }
}

var backpack_list = [
  {name: "None", icon: "assets/empty.png", size: 0, speed: 0, weight: 0},
  {name: "Sling", icon: "assets/backpack/01-Sling.png", size: 6, speed: 0, weight: .6},
  {name: "ArmyBag", icon: "assets/backpack/02-ArmyBag.png", size: 8, speed: 0, weight: .8},
  {name: "T-Bag", icon: "assets/backpack/03-TBag.png", size: 9, speed: 0, weight: .7},
  {name: "Duffle", icon: "assets/backpack/04-Duffle.png", size: 12, speed: 0, weight: .9},
  {name: "MBSS", icon: "assets/backpack/05-MBSS.png", size: 16, speed: 0, weight: .7},
  {name: "Scav", icon: "assets/backpack/06-Scav.png", size: 20, speed: -8, weight: 1.1},
  {name: "Berkut", icon: "assets/backpack/07-Berkut.png", size: 20, speed: 0, weight: .8},
  {name: "Tri-Zip", icon: "assets/backpack/08-TriZip.png", size: 30, speed: -15, weight: 1.3},
  {name: "Beta2", icon: "assets/backpack/09-Beta2.png", size: 30, speed: -10, weight: 1.1},
  {name: "Oakley", icon: "assets/backpack/10-Oakley.png", size: 32, speed: -8, weight: 1.25},
  {name: "Pilgrim", icon: "assets/backpack/11-Pilgrim.png", size: 35, speed: -28, weight: 1.5},
  {name: "Paratus", icon: "assets/backpack/12-Paratus.png", size: 35, speed: -5, weight: 1.3},
  {name: "Attack2", icon: "assets/backpack/13-Attack2.png", size: 35, speed: -20, weight: 1.3},
  {name: "BlackJack", icon: "assets/backpack/14-BlackJack.png", size: 42, speed: -30, weight: 1.2},
]

module.exports.backpack_list = backpack_list;
module.exports.getBackpack = getBackpack;