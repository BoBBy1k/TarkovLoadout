var getHelm = function(prop) {
    switch (prop) {
        case 0: return require('./assets/empty.png');
        case 1: return require('./assets/helm/01-Kolpak.png');
        case 2: return require('./assets/helm/02-Firefighter.png');
        case 3: return require('./assets/helm/03-Jeta.png');
        case 4: return require('./assets/helm/04-SSH.png');
        case 5: return require('./assets/helm/05-UNTAR.png');
        case 6: return require('./assets/helm/06-6B47.gif');
        case 7: return require('./assets/helm/07-SFERA.png');
        case 8: return require('./assets/helm/08-Kiver-M.png');
        case 9: return require('./assets/helm/09-LZSh.png');
        case 10: return require('./assets/helm/10-Ronin.png');
        case 11: return require('./assets/helm/11-ACHHC.gif');
        case 12: return require('./assets/helm/12-TC2001.png');
        case 13: return require('./assets/helm/13-TC2002.png');
        case 14: return require('./assets/helm/14-ULACH.gif');
        case 15: return require('./assets/helm/15-ZSH.gif');
        case 16: return require('./assets/helm/16-LZHZ-2D.png');
        case 17: return require('./assets/helm/17-Maska.gif');
        case 18: return require('./assets/helm/18-FASTMT.gif');
        case 19: return require('./assets/helm/19-Airframe.png');
        case 20: return require('./assets/helm/20-Altyn.png');
        case 21: return require('./assets/helm/21-Vulkan.png');
        default: return require('./assets/empty.png');
    }
}

var helm_list = [
    {name: "None", icon: "assets/empty.png", weight: 0.0},
    {name: "Kolpak", icon: "assets/helm/01-Kolpak.png", class: 2, durability: 25, material: "Aramid", ricochet: "low", speed: -2, turn: -10, ergo: -5, weight: 1.9},
    {name: "SHPM", icon: "assets/helm/02-Firefighter.png", class: 2, durability: 40, material: "Aramid", ricochet: "low", speed: 0, turn: -12, ergo: -10, weight: 1.5},
    {name: "Jeta", icon: "assets/helm/03-Jeta.png", class: 2, durability: 65, material: "Aramid", ricochet: "low", speed: 0, turn: -13, ergo: -14, weight: 1.3},
    {name: "SSH", icon: "assets/helm/04-SSH.png", class: 3, durability: 30, material: "Steel", ricochet: "high", speed: -2, turn: -8, ergo: -13, weight: 1.5},
    {name: "UNTAR", icon: "assets/helm/05-UNTAR.png", class: 3, durability: 25, material: "Aramid", ricochet: "high", speed: -2, turn: -10, ergo: -2, weight: 2.2},
    {name: "6B47", icon: "assets/helm/06-6B47.gif", class: 3, durability: 25, material: "Aluminium", ricochet: "high", speed: -1, turn: -5, ergo: -2, weight: 1.3},
    {name: "SEFRA", icon: "assets/helm/07-SFERA.png", class: 3, durability: 100, material: "Steel", ricochet: "medium", speed: -2, turn: -10, ergo: -3, weight: 3.5},
    {name: "Kiver", icon: "assets/helm/08-Kiver-M.png", class: 3, durability: 35, material: "UHMWPE", ricochet: "medium", speed: -3, turn: -5, ergo: -1, weight: 1.2},
    {name: "LZSH", icon: "assets/helm/09-LZSh.png", class: 3, durability: 30, material: "Aramid", ricochet: "low", speed: -1, turn: -7, ergo: -0, weight: .95},
    {name: "Ronin", icon: "assets/helm/10-Ronin.png", class: 3, durability: 60, material: "Aramid", ricochet: "low", speed: -5, turn: -10, ergo: -5, weight: 1.6},
    {name: "ACHHC", icon: "assets/helm/11-ACHHC.gif", class: 4, durability: 30, material: "Combined", ricochet: "high", speed: -2, turn: -7, ergo: -2, weight: 1.5},
    {name: "TC-2001", icon: "assets/helm/12-TC2001.png", class: 4, durability: 25, material: "Combined", ricochet: "high", speed: -2, turn: -8, ergo: -2, weight: 1.4},
    {name: "TC-2002", icon: "assets/helm/13-TC2002.png", class: 4, durability: 27, material: "Combined", ricochet: "high", speed: -2, turn: -8, ergo: -2, weight: 1.45},
    {name: "ULACH", icon: "assets/helm/14-ULACH.gif", class: 4, durability: 38, material: "UHMWPE", ricochet: "high", speed: -2, turn: -10, ergo: -4, weight: 1.9},
    {name: "ZSH", icon: "assets/helm/15-ZSH.gif", class: 4, durability: 30, material: "Combined", ricochet: "medium", speed: -3, turn: -8, ergo: -2, weight: 3.7},
    {name: "LSHZ-2DTM", icon: "assets/helm/16-LZHZ-2D.png", class: 4, durability: 55, material: "Combined", ricochet: "high", speed: -3, turn: -15, ergo: -10, weight: 3.4},
    {name: "Maska", icon: "assets/helm/17-Maska.gif", class: 4, durability: 60, material: "Steel", ricochet: "medium", speed: -3, turn: -6, ergo: -7, weight: 2.6},
    {name: "Fast MT", icon: "assets/helm/18-FASTMT.gif", class: 4, durability: 40, material: "Combined", ricochet: "high", speed: -1, turn: -7, ergo: 0, weight: 0.9},
    {name: "Airframe", icon: "assets/helm/19-Airframe.png", class: 4, durability: 40, material: "Combined", ricochet: "high", speed: 0, turn: -3, ergo: -3, weight: .88},
    {name: "Altyn", icon: "assets/helm/20-Altyn.png", class: 5, durability: 45, material: "Steel", ricochet: "high", speed: -7, turn: -17, ergo: -6, weight: 4.0},
    {name: "Vulkan", icon: "assets/helm/21-Vulkan.png", class: 6, durability: 55, material: "Combined", ricochet: "high", speed: -7, turn: -33, ergo: -20, weight: 4.5},
];

module.exports.helm_list = helm_list;
module.exports.getHelm = getHelm;