var getCalculations = function() {
  //calculate protection levels
  var helmClass = helm_list[this.state.currentHelm]['class']
  var faceshieldClass = faceshields_list[this.state.currentFaceshield]['class']
  var vestClass = vest_list[this.state.currentVest]['class']
  var rigClass = armoredrig_list[this.state.currentArmoredRig]['class']
  //calculate speed
  var totalSpeed = helm_list[this.state.currentHelm]['speed'] + faceshields_list[this.state.currentFaceshield]['speed'] + headsets_list[this.state.currentSet]['speed'] + vest_list[this.state.currentVest]['speed'] + rig_list[this.state.currentRig]['speed'] + armoredrig_list[this.state.currentArmoredRig]['speed'] + backpack_list[this.state.currentBackpack]['speed']
  //calculate turn rate
  var totalTurn = helm_list[this.state.currentHelm]['turn'] + faceshields_list[this.state.currentFaceshield]['turn'] + headsets_list[this.state.currentSet]['turn'] + vest_list[this.state.currentVest]['turn'] + rig_list[this.state.currentRig]['turn'] + armoredrig_list[this.state.currentArmoredRig]['turn'] + backpack_list[this.state.currentBackpack]['turn']
  //calculate ergonomics
  var totalErgo = helm_list[this.state.currentHelm]['ergo'] + faceshields_list[this.state.currentFaceshield]['ergo'] + headsets_list[this.state.currentSet]['ergo'] + vest_list[this.state.currentVest]['ergo'] + rig_list[this.state.currentRig]['ergo'] + armoredrig_list[this.state.currentArmoredRig]['ergo'] + backpack_list[this.state.currentBackpack]['ergo']
  //calculate weight
  var totalWeight = helm_list[this.state.currentHelm]['weight'] + faceshields_list[this.state.currentFaceshield]['weight'] + headsets_list[this.state.currentSet]['weight'] + vest_list[this.state.currentVest]['weight'] + rig_list[this.state.currentRig]['weight'] + armoredrig_list[this.state.currentArmoredRig]['weight'] + backpack_list[this.state.currentBackpack]['weight']
  //calculate storage slots
  var totalStorage = rig_list[this.state.currentRig]['slots'] + armoredrig_list[this.state.currentArmoredRig]['slots'] + backpack_list[this.state.currentBackpack]['slots']
  //Something else?
  var textArmor = "Armor Class " + "Helmet: " + helmClass + "Face: " + faceshieldClass + "Body: " + vestClass + rigClass;
  var textSpeed = "Speed: " + totalSpeed
  var textTurn = "Turn Rate: " + totalTurn
  var textErgo = "Ergonomics: " + totalErgo
  var textWeight = "Weight: " + totalweight + "kg"
  var textStorage = "Storage Slots: " +totalStorage
  var textTotal = textArmor + textSpeed + textTurn + textErgo + textWeight + textStorage;
  return(textTotal)
}

module.exports.getCalculations = getCalculations;