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
      case 8: return require('./assets/backpack/08-TriZip.png');
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
  {name: "None", icon: "assets/empty.png", slots: 0, class: 0, speed: 0, turn: 0, ergo: 0, weight: 0.0},
  {name: "Sling", icon: "assets/backpack/01-Sling.png", slots: 6, class: 0, speed: 0, turn: 0, ergo: 0, weight: .6},
  {name: "Army Bag", icon: "assets/backpack/02-ArmyBag.png", slots: 8, class: 0, speed: 0, turn: 0, ergo: 0, weight: .8},
  {name: "T-Bag", icon: "assets/backpack/03-TBag.png", slots: 9, class: 0, speed: 0, turn: 0, ergo: 0, weight: .7},
  {name: "Duffle Bag", icon: "assets/backpack/04-Duffle.png", slots: 12, class: 0, speed: 0, turn: 0, ergo: 0, weight: .9},
  {name: "MBSS", icon: "assets/backpack/05-MBSS.png", slots: 16, class: 0, speed: 0, turn: 0, ergo: 0, weight: .7},
  {name: "Scav Backpack", icon: "assets/backpack/06-Scav.png", slots: 20, class: 0, speed: -8, turn: 0, ergo: 0, weight: 1.1},
  {name: "Berkut", icon: "assets/backpack/07-Berkut.png", slots: 20, class: 0, speed: 0, turn: 0, ergo: 0, weight: .8},
  {name: "Tri-Zip", icon: "assets/backpack/08-TriZip.png", slots: 30, class: 0, speed: -15, turn: 0, ergo: 0, weight: 1.3},
  {name: "Beta-2", icon: "assets/backpack/09-Beta2.png", slots: 30, class: 0, speed: -10, turn: 0, ergo: 0, weight: 1.1},
  {name: "Oakley", icon: "assets/backpack/10-Oakley.png", slots: 32, class: 0, speed: -8, turn: 0, ergo: 0, weight: 1.25},
  {name: "Pilgrim", icon: "assets/backpack/11-Pilgrim.png", slots: 35, class: 0, speed: -28, turn: 0, ergo: 0, weight: 1.5},
  {name: "Paratus", icon: "assets/backpack/12-Paratus.png", slots: 35, class: 0, speed: -5, turn: 0, ergo: 0, weight: 1.3},
  {name: "Attack-2", icon: "assets/backpack/13-Attack2.png", slots: 35, class: 0, speed: -20, turn: 0, ergo: 0, weight: 1.3},
  {name: "Blackjack", icon: "assets/backpack/14-BlackJack.png", slots: 42, class: 0, speed: -30, turn: 0, ergo: 0, weight: 1.2},
]

module.exports.backpack_list = backpack_list;
module.exports.getBackpack = getBackpack;