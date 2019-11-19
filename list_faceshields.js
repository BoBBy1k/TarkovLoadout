  var getFaceshields = function(prop) {
    switch (prop) {
        case 0: return require('./assets/empty.png');
        case 1: return require('./assets/faceshields/01-Shattered.png');
        case 2: return require('./assets/faceshields/02-FastVisor.png');
        case 3: return require('./assets/faceshields/03-K1.png');
        case 4: return require('./assets/faceshields/04-FastShield.png');
        case 5: return require('./assets/faceshields/05-Kiver.png');
        case 6: return require('./assets/faceshields/06-ZSh.png');
        case 7: return require('./assets/faceshields/07-LSHZ.png');
        case 8: return require('./assets/faceshields/08-Vulkan.png');
        case 9: return require('./assets/faceshields/09-Altyn.png');
        case 10: return require('./assets/faceshields/10-Maska.gif');
        default: return require('./assets/empty.png');
    }
}

var faceshields_list = [
    {name: "None", icon: "assets/empty.png", require: [], class: 0, durability: 0, material: "", ricochet: "", speed: 0, turn: 0, ergo: 0, zones: "", weight: 0.0, slots: 0},
    {name: "Shattered Mask", icon: "assets/faceshields/01-Shattered.png", require: [0], class: 1, durability: 40, material: "Aramid", ricochet: "High", speed: 0, turn: 0, ergo: 0, zones: "Eyes, Jaws", weight: 0.3, slots: 0},
    {name: "Fast Visor", icon: "assets/faceshields/02-FastVisor.png", require: [9,18,19], class: 2, durability: 20, material: "Glass", ricochet: "low", speed: 0, turn: 0, ergo: 0, zones: "Eyes", weight: 1, slots: 0},
    {name: "K1 Visor", icon: "assets/faceshields/03-K1.png", require: [1], class: 2, durability: 30, material: "Glass", ricochet: "low", speed: 0, turn: 0, ergo: 0, zones: "Eyes, Jaws", weight: 1, slots: 0},
    {name: "Fast Faceshield", icon: "assets/faceshields/04-FastShield.png", require: [9,18,19],  class: 3, durability: 40, material: "Glass", ricochet: "Medium", speed: 0, turn: -8, ergo: -8, zones: "Eyes, Jaws", weight: 1, slots: 0},
    {name: "Kiver Faceshield", icon: "assets/faceshields/05-Kiver.png", require: [8], class: 3, durability: 40, material: "Glass", ricochet: "High", speed: 0, turn: 0, ergo: -7, zones: "Eyes, Jaws", weight: 1.2, slots: 0},
    {name: "ZSh Faceshield", icon: "assets/faceshields/06-ZSh.png", require: [15], class: 3, durability: 50, material: "Glass", ricochet: "Medium", speed: 0, turn: -5, ergo: 0, zones: "Eyes, Jaws", weight: 1, slots: 0},
    {name: "LSHZ Faceshield", icon: "assets/faceshields/07-LSHZ.png", require: [16], class: 4, durability: 50, material: "Glass", ricochet: "High", speed: 0, turn: -5, ergo: -10, zones: "Eyes, Jaws", weight: 1, slots: 0},
    {name: "Vulkan Faceshield", icon: "assets/faceshields/08-Vulkan.png", require: [21], class: 4, durability: 85, material: "Glass", ricochet: "High", speed: 0, turn: -9, ergo: -10, zones: "Eyes, Jaws", weight: 1.8, slots: 0},
    {name: "Altyn Faceshield", icon: "assets/faceshields/09-Altyn.png", require: [20], class: 5, durability: 50, material: "Combined", ricochet: "High", speed: 0, turn: -8, ergo: -7, zones: "Eyes, Jaws", weight: 1.4, slots: 0},
    {name: "Maska Faceshield", icon: "assets/faceshields/10-Maska.gif", require: [17], class: 6, durability: 50, material: "Steel", ricochet: "Medium", speed: 0, turn: 0, ergo: -19, zones: "Eyes, Jaws", weight: 1.1, slots: 0},
];

module.exports.faceshields_list = faceshields_list;
module.exports.getFaceshields = getFaceshields;