  var getFaceshields = function(prop) {
    switch (prop) {
        case 0: return require('./assets/empty.png');
        case 1: return require('./assets/faceshields/01-Shattered.png');
        case 2: return require('./assets/faceshields/01-Shattered.png');
        case 3: return require('./assets/faceshields/01-Shattered.png');
        case 4: return require('./assets/faceshields/01-Shattered.png');
        case 5: return require('./assets/faceshields/01-Shattered.png');
        case 6: return require('./assets/faceshields/01-Shattered.png');
        case 7: return require('./assets/faceshields/01-Shattered.png');
        case 8: return require('./assets/faceshields/01-Shattered.png');
        case 9: return require('./assets/faceshields/01-Shattered.png');
        case 10: return require('./assets/faceshields/01-Shattered.png');
        default: return require('./assets/empty.png');
    }
}

var faceshields_list = [
    {name: "None", icon: "assets/empty.png", weight: 0.0},
    {name: "Shattered Mask", icon: "assets/faceshields/01-Shattered.png", class: 1, durability: 40, material: "Aramid", ricochet: "High", speed: 0, turn: 0, ergo: 0, zones: "Eyes, Jaws", weight: 0.3},
    {name: "Fast Visor", icon: "assets/faceshields/01-Shattered.png", class: 2, durability: 20, material: "Glass", ricochet: "low", speed: 0, turn: 0, ergo: 0, zones: "Eyes", weight: 1},
    {name: "K1 Visor", icon: "assets/faceshields/01-Shattered.png", class: 2, durability: 30, material: "Glass", ricochet: "low", speed: 0, turn: 0, ergo: 0, zones: "Eyes, Jaws", weight: 1},
    {name: "Fast Faceshield", icon: "assets/faceshields/01-Shattered.png", class: 3, durability: 40, material: "Glass", ricochet: "Medium", speed: 0, turn: -8, ergo: -8, zones: "Eyes, Jaws", weight: 1},
    {name: "Kiver Faceshield", icon: "assets/faceshields/01-Shattered.png", class: 3, durability: 40, material: "Glass", ricochet: "High", speed: 0, turn: 0, ergo: -7, zones: "Eyes, Jaws", weight: 1.2},
    {name: "ZSh Faceshield", icon: "assets/faceshields/01-Shattered.png", class: 3, durability: 50, material: "Glass", ricochet: "Medium", speed: 0, turn: -5, ergo: 0, zones: "Eyes, Jaws", weight: 1},
    {name: "LSHZ Faceshield", icon: "assets/faceshields/01-Shattered.png", class: 4, durability: 50, material: "Glass", ricochet: "High", speed: 0, turn: -5, ergo: -10, zones: "Eyes, Jaws", weight: 1},
    {name: "Vulkan Faceshield", icon: "assets/faceshields/01-Shattered.png", class: 4, durability: 85, material: "Glass", ricochet: "High", speed: 0, turn: -9, ergo: -10, zones: "Eyes, Jaws", weight: 1.8},
    {name: "Altyn Faceshield", icon: "assets/faceshields/01-Shattered.png", class: 5, durability: 50, material: "Combined", ricochet: "High", speed: 0, turn: -8, ergo: -7, zones: "Eyes, Jaws", weight: 1.4},
    {name: "Maska Faceshield", icon: "assets/faceshields/01-Shattered.png", class: 6, durability: 50, material: "Steel", ricochet: "Medium", speed: 0, turn: 0, ergo: -19, zones: "Eyes, Jaws", weight: 1.1},
];

module.exports.faceshields_list = faceshields_list;
module.exports.getFaceshields = getFaceshields;