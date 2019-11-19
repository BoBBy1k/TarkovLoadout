var getVest = function(prop) {
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
        case 16: return require('./assets/vest/16-Redut-T5.png');
        case 17: return require('./assets/vest/17-Zhuk-6a.png');
        case 18: return require('./assets/vest/18-6B43_6A_Fort.png');
        default: return require('./assets/empty.png');
    }
}

var vest_list = [
{name: "None", icon: "assets/empty.png", class: 0, durability: 0, material: "", speed: 0, turn: 0, ergo: 0, zones: "", weight: 0, slots: 0},
{name: "3M", icon: "assets/vest/01-3M.png", class: 2, durability: 40, material: "Aramid", speed: -7, turn: -6, ergo: -4, zones: "Chest and Stomach", weight: 8, slots: 0},
{name: "PACA", icon: "assets/vest/02-PACA.png", class: 2, durability: 50, material: "Aramid", speed: -6, turn: -5, ergo: -6, zones: "Chest and Stomach", weight: 7, slots: 0},
{name: "UNTAR", icon: "assets/vest/03-UNTAR.png", class: 3, durability: 45, material: "Aluminium", speed: -18, turn: -6, ergo: -6, zones: "Chest and Stomach", weight: 11, slots: 0},
{name: "6B23-1", icon: "assets/vest/04-6B23-1.png", class: 3, durability: 40, material: "Steel", speed: -11, turn: -5, ergo: -9, zones: "Chest and Stomach", weight: 7.9, slots: 0},
{name: "Zhuk-3 Press", icon: "assets/vest/05-Zhuk-3_Press.png", class: 3, durability: 50, material: "UHMWPE", speed: -10, turn: -4, ergo: -5, zones: "Chest and Stomach", weight: 5.2, slots: 0},
{name: "Kirasa", icon: "assets/vest/06-Kirasa.png", class: 3, durability: 70, material: "Combined", speed: -8, turn: -5, ergo: -6, zones: "Chest and Stomach", weight: 4.1, slots: 0},
{name: "Trooper", icon: "assets/vest/07-Trooper.png", class: 4, durability: 70, material: "UHMWPE", speed: -9, turn: -2, ergo: -3, zones: "Chest", weight: 5.0, slots: 0},
{name: "6B13 Assault", icon: "assets/vest/08-6B13_Assault.gif", class: 4, durability: 47, material: "Ceramic", speed: -12, turn: -3, ergo: -5, zones: "Chest and Stomach", weight: 10.5, slots: 0},
{name: "6b23-2 Mountain", icon: "assets/vest/09-6B23-2_Mountain.png", class: 4, durability: 55, material: "Ceramic", speed: -11, turn: -3, ergo: -9, zones: "Chest and Stomach", weight: 7.2, slots: 0},
{name: "GZHEL-K", icon: "assets/vest/10-GZHEL.png", class: 4, durability: 75, material: "Ceramic", speed: -10, turn: -3, ergo: -4, zones: "Chest and Stomach", weight: 8.9, slots: 0},
{name: "Redut-M", icon: "assets/vest/11-Redut-M.png", class: 5, durability: 57, material: "Combined", speed: -13, turn: -12, ergo: -11, zones: "Chest and Stomach", weight: 11.5, slots: 0},
{name: "Gen4 Mobility", icon: "assets/vest/12-Gen4-HMK.png", class: 5, durability: 62, material: "Titan", speed: -11, turn: -15, ergo: -11, zones: "Chest and Stomach", weight: 10, slots: 0},
{name: "6B13-M 'Killa'", icon: "assets/vest/13-6B13M_Killa.png", class: 5, durability: 60, material: "UHMWPE", speed: -9, turn: -3, ergo: -5, zones: "Chest and Stomach", weight: 7.5, slots: 0},
{name: "Gen4 Assault", icon: "assets/vest/14-Gen4-Assault.png", class: 5, durability: 68, material: "Titan", speed: -17, turn: -9, ergo: -8, zones: "Chest, Stomach and Arms", weight: 11, slots: 0},
{name: "Gen4 Full", icon: "assets/vest/15-Gen4-Full.png", class: 5, durability: 80, material: "Titan", speed: -33, turn: -15, ergo: -18, zones: "Chest, Stomach and Arms", weight: 13, slots: 0},
{name: "Redut-T5", icon: "assets/vest/16-Redut-T5.png", class: 5, durability: 95, material: "Combined", speed: -37, turn: -15, ergo: -14, zones: "Chest, Stomach and Arms", weight: 13.5, slots: 0},
{name: "Zhuk-6a", icon: "assets/vest/17-Zhuk-6a.png", class: 6, durability: 75, material: "Ceramic", speed: -13, turn: -5, ergo: -6, zones: "Chest and Stomach", weight: 8.0, slots: 0},
{name: "6B43 6A 'Fort'", icon: "assets/vest/18-6B43_6A_Fort.png", class: 6, durability: 75, material: "Combined", speed: -40, turn: -18, ergo: -27, zones: "Chest, Stomach and Arms", weight: 15, slots: 0},
]

module.exports.vest_list = vest_list;
module.exports.getVest = getVest;