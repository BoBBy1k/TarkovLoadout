var getHeadset = function(prop) {
  switch (prop) {
      case 0: return require('./assets/empty.png');
      case 1: return require('./assets/headsets/01-rac.png');
      case 2: return require('./assets/headsets/02-gssh.png');
      case 3: return require('./assets/headsets/03-comtac.png');
      case 4: return require('./assets/headsets/04-sordin.png');
      case 5: return require('./assets/headsets/05-sport.png');
      default: return require('./assets/empty.png');
  }
}

var headsets_list = [
  {name: "None", icon: "assets/empty.png",  weight: 0.0, slots: 0, class: 0, speed: 0, turn: 0, ergo: 0},
  {name: "FAST RAC", icon: "assets/headsets/01-rac.png", weight: 0.6, slots: 0, class: 0, speed: 0, turn: 0, ergo: 0},
  {name: "GSSh-01", icon: "assets/headsets/02-gssh.png", weight: 0.5, slots: 0, class: 0, speed: 0, turn: 0, ergo: 0},
  {name: "Comtac", icon: "assets/headsets/03-comtac.png", weight: 0.7, slots: 0, class: 0, speed: 0, turn: 0, ergo: 0},
  {name: "Sordin", icon: "assets/headsets/04-sordin.png", weight: 0.65, slots: 0, class: 0, speed: 0, turn: 0, ergo: 0},
  {name: "Tactical Sport", icon: "assets/headsets/05-sport.png", weight: 0.6, slots: 0, class: 0, speed: 0, turn: 0, ergo: 0},
]

module.exports.headsets_list = headsets_list;
module.exports.getHeadset = getHeadset;