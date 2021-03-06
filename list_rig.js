var getRig = function(prop) {
  switch (prop) {
      case 0: return require('./assets/empty.png');
      case 1: return require('./assets/rig/01-Scav.png');
      case 2: return require('./assets/rig/02-SOE.png');
      case 3: return require('./assets/rig/03-Wartech.png');
      case 4: return require('./assets/rig/04-ScoutSniper.png');
      case 5: return require('./assets/rig/05-D3CRX.png');
      case 6: return require('./assets/rig/06-Triton.png');
      case 7: return require('./assets/rig/07-Blackhawk.gif');
      case 8: return require('./assets/rig/08-Blackrock.png');
      case 9: return require('./assets/rig/09-MK3.png');
      case 10: return require('./assets/rig/10-Alpha.png');
      case 11: return require('./assets/rig/11-Belt.png');
      default: return require('./assets/empty.png');
  }
}
var getRigStorage = function(prop) {
  switch (prop) {
    case 0: return require('./assets/empty.png');
    case 1: return require('./assets/rig/01-Scavslot.png');
    case 2: return require('./assets/rig/02-SOEslot.png');
    case 3: return require('./assets/rig/03-Wartechslot.png');
    case 4: return require('./assets/rig/04-ScoutSniperslot.png');
    case 5: return require('./assets/rig/05-D3CRXslot.png');
    case 6: return require('./assets/rig/06-Tritonslot.png');
    case 7: return require('./assets/rig/07-Blackhawkslot.png');
    case 8: return require('./assets/rig/08-Blackrockslot.png');
    case 9: return require('./assets/rig/09-MK3slot.png');
    case 10: return require('./assets/rig/10-Alphaslot.png');
    case 11: return require('./assets/rig/11-Beltslot.png');
    default: return require('./assets/empty.png');
  }
}

var rig_list = [
  {name: "None", icon: "assets/empty.png", weight: 0.0, slots: 0, class: 0, speed: 0, turn: 0, ergo: 0},
  {name: "Scav Vest", icon: "assets/rig/01-Scav.png", weight: 0.4, slots: 6, class: 0, speed: 0, turn: 0, ergo: 0},
  {name: "SOE Rig", icon: "assets/rig/02-SOE.png", weight: 0.45, slots: 8, class: 0, speed: 0, turn: 0, ergo: 0},
  {name: "Wartech Rig", icon: "assets/rig/03-Wartech.png", weight: 1.8, slots: 10, class: 0, speed: 0, turn: 0, ergo: 0},
  {name: "Scout-Sniper Rig", icon: "assets/rig/04-ScoutSniper.png", weight: 1.7, slots: 12, class: 0, speed: 0, turn: 0, ergo: 0},
  {name: "D3CRX Rig", icon: "assets/rig/05-D3CRX.png", weight: .9, slots: 16, class: 0, speed: 0, turn: 0, ergo: 0},
  {name: "Triton Rig", icon: "assets/rig/06-Triton.png", weight: 1.3, slots: 16, class: 0, speed: 0, turn: 0, ergo: 0},
  {name: "Blackhawk Commando", icon: "assets/rig/07-Blackhawk.gif", weight: 1.35, slots: 16, class: 0, speed: 0, turn: 0, ergo: 0},
  {name: "Blackrock Rig", icon: "assets/rig/08-Blackrock.png", weight: 1.8, slots: 20, class: 0, speed: 0, turn: 0, ergo: 0},
  {name: "Mk2 Rig", icon: "assets/rig/09-MK3.png", weight: 1.65, slots: 20, class: 0, speed: 0, turn: 0, ergo: 0},
  {name: "Alpha Rig", icon: "assets/rig/10-Alpha.png", weight: 1.7, slots: 20, class: 0, speed: 0, turn: 0, ergo: 0},
  {name: "Belt A+B Rig", icon: "assets/rig/11-Belt.png", weight: 1.7, slots: 25, class: 0, speed: 0, turn: 0, ergo: 0},
]

module.exports.rig_list = rig_list;
module.exports.getRig = getRig;
module.exports.getRigStorage = getRigStorage;