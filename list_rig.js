var getRig = function(prop) {
  switch (prop) {
      case 0: return require('./assets/rig/Blackrock.png');
      case 1: return require('./assets/rig/00-M2.png');
      case 2: return require('./assets/rig/01-M1.png');
      case 3: return require('./assets/rig/02-Tactec.png');
      case 4: return require('./assets/rig/03-TV-110.png');
      default: return require('./assets/rig/Blackrock.png');
  }
}

var rig_list = [
  {name: "None", icon: "assets/rig/Blackrock.png", class: 0, durability: 0, material: "", speed: 0, turn: 0, ergo: 0, zones: ""},
  {name: "M2", icon: "assets/rig/00-M2.png", class: 3, durability: 40, material: "Titan", speed: -8, turn: -5, ergo: -2, zones: "Chest and Stomach"},
  {name: "M1", icon: "assets/rig/01-M1.png", class: 3, durability: 45, material: "Titan", speed: -10, turn: -5, ergo: -5, zones: "Chest and Stomach"},
  {name: "Tactec", icon: "assets/rig/02-Tactec.png", class: 4, durability: 45, material: "Steel", speed: -7, turn: -3, ergo: -3, zones: "Chest"},
  {name: "TV-110", icon: "assets/rig/03-TV-110.png", class: 3, durability: 60, material: "UHMWPE", speed: -8, turn: -4, ergo: -5, zones: "Chest"},
]

module.exports.rig_list = rig_list;
module.exports.getRig = getRig;