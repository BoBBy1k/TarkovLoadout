import React, { Component } from 'react';
import Tabbar from 'react-native-tabbar-bottom';
import { Platform, StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Picker } from 'react-native';
import {getHelm , helm_list } from './list_helm.js';
import {getFaceshields, faceshields_list} from './list_faceshields.js';
import {getHeadset, headsets_list} from './list_headsets.js';
import {getVest , vest_list } from './list_vest.js';
import {getRig, getRigStorage, rig_list} from './list_rig.js';
import {getArmoredRig,getArmoredRigStorage , armoredrig_list } from './list_armoredrig.js';
import {getBackpack, backpack_list} from './list_backpack.js';
import AppMain from './AppMain.js';
import AppHelmet from './AppHelmet.js';
import AppFaceShield from './AppFaceShield.js';
import AppHeadset from './AppHeadset.js';
import AppVest from './AppVest.js';
import AppRig from './AppRig.js';
import AppArmoredRig from './AppArmoredRig.js';
import AppBackpack from './AppBackpack.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentHelm: 15,
      currentFaceshield: 6,
      currentHeadset: 5,
      currentVest: 10,
      currentRig: 8,
      currentArmoredRig: 0,
      currentBackpack: 8,
      page: "HomeScreen",
    }
    this.setHelm = this.setHelm.bind(this);
    this.setFaceshield = this.setFaceshield.bind(this);
    this.setHeadset = this.setHeadset.bind(this)
    this.setVest = this.setVest.bind(this);
    this.setRig = this.setRig.bind(this);
    this.setArmoredRig = this.setArmoredRig.bind(this);
    this.setBackpack = this.setBackpack.bind(this);
    this.getCalculations = this.getCalculations.bind(this);
  }

  setHelm = function(input,input2){
    this.setState({ currentHelm: input })
    this.setState({ currentFaceshield: input })
    if(faceshields_list[this.state.currentFaceshield]['require'].includes(input) == false) {
      this.setState({ currentFaceshield: 0 }) 
    }
    else
    {this.setState({ currentFaceshield: input2 })} 
  }

  setFaceshield = function(input){
    this.setState({ currentFaceshield: input })
  }
  setHeadset = function(input){
    this.setState({ currentHeadset: input })
  }
  setVest = function(input){
    this.setState({ currentVest: input })
  }
  setRig = function(input){
    this.setState({ currentRig: input })
  }
  setArmoredRig = function(input){
    this.setState({ currentArmoredRig: input })
  }
  setBackpack = function(input){
    this.setState({ currentBackpack: input })
  }

  showStats = function(list, currentItem) {
    var armorClass = list[currentItem]['class'];
    var Speed = list[currentItem]['speed'];
    var Turn = list[currentItem]['turn'];
    var Ergo = list[currentItem]['ergo'];
    var Weight = list[currentItem]['weight'];
    var Storage = list[currentItem]['slots']
    var textArmor = "Armor Class: " + armorClass;
    var textSpeed = "\nSpeed: " + Speed + "%";
    var textTurn = "   Turn Rate: " + Turn + "%";
    var textErgo = "\nErgo: " + Ergo;
    var textWeight = "   Weight: " + Weight + "kg";
    var textStorage = "\nStorage: " + Storage + " slots";
    var textTotal = []
    textTotal.push(armorClass == 0 ? <Text style={styles.hide}>{textArmor}</Text> 
    : armorClass == 2 ? <Text style={styles.red}>{textArmor}</Text> 
    : armorClass == 3 ? <Text style={styles.orange}>{textArmor}</Text> 
    : armorClass == 4 ? <Text style={styles.green}>{textArmor}</Text> 
    : armorClass == 5 ? <Text style={styles.blue}>{textArmor}</Text> 
    : armorClass == 6 ? <Text style={styles.purple}>{textArmor}</Text> 
    : <Text style={styles.grey}>{textArmor}</Text>)
    textTotal.push(Speed == 0 ? <Text style={styles.hide}>{textSpeed}</Text> : <Text style={styles.red}>{textSpeed}</Text>)
    textTotal.push(Turn == 0 ? <Text style={styles.hide}>{textTurn}</Text> : <Text style={styles.red}>{textTurn}</Text>)
    textTotal.push(Ergo == 0 ? <Text style={styles.hide}>{textErgo}</Text> : <Text style={styles.red}>{textErgo}</Text>)
    textTotal.push(Weight == 0 ? <Text style={styles.hide}>{textWeight}</Text> : <Text>{textWeight}</Text>)
    textTotal.push(Storage == 0 ? <Text style={styles.hide}>{textStorage}</Text> : <Text>{textStorage}</Text>)
    return(textTotal)
  }

  getCalculations = function() {
    //calculate protection levels
    var helmClass = helm_list[this.state.currentHelm]['class']
    var faceshieldClass = faceshields_list[this.state.currentFaceshield]['class']
    var vestClass = vest_list[this.state.currentVest]['class']
    var rigClass = armoredrig_list[this.state.currentArmoredRig]['class']
    var totalArmor = helm_list[this.state.currentHelm]['class'] + faceshields_list[this.state.currentFaceshield]['class'] + vest_list[this.state.currentVest]['class'] + armoredrig_list[this.state.currentArmoredRig]['class']
    //calculate speed
    var totalSpeed = helm_list[this.state.currentHelm]['speed'] + faceshields_list[this.state.currentFaceshield]['speed'] + vest_list[this.state.currentVest]['speed'] + armoredrig_list[this.state.currentArmoredRig]['speed'] + backpack_list[this.state.currentBackpack]['speed']
    //calculate turn rate
    var totalTurn = helm_list[this.state.currentHelm]['turn'] + faceshields_list[this.state.currentFaceshield]['turn'] + vest_list[this.state.currentVest]['turn'] + armoredrig_list[this.state.currentArmoredRig]['turn']
    //calculate ergonomics
    var totalErgo = helm_list[this.state.currentHelm]['ergo'] + faceshields_list[this.state.currentFaceshield]['ergo'] + vest_list[this.state.currentVest]['ergo'] + armoredrig_list[this.state.currentArmoredRig]['ergo']
    //calculate weight
    var totalWeight = helm_list[this.state.currentHelm]['weight'] + faceshields_list[this.state.currentFaceshield]['weight'] + headsets_list[this.state.currentHeadset]['weight'] + vest_list[this.state.currentVest]['weight'] + rig_list[this.state.currentRig]['weight'] + armoredrig_list[this.state.currentArmoredRig]['weight'] + backpack_list[this.state.currentBackpack]['weight']
    totalWeight = totalWeight.toPrecision(3)
    //calculate storage slots
    var totalStorage = rig_list[this.state.currentRig]['slots'] + armoredrig_list[this.state.currentArmoredRig]['slots'] + backpack_list[this.state.currentBackpack]['slots']
    //Something else?
    var textArmor = "Helmet/Face/Body: " + helmClass + "/" + faceshieldClass + "/" + (vestClass + rigClass);
    var textSpeed = "\nSpeed: " + totalSpeed + "%";
    var textTurn = "   Turn Rate: " + totalTurn + "%";
    var textErgo = "\nErgo: " + totalErgo;
    var textWeight = "   Weight: " + totalWeight + "kg"
    var textStorage = "\nStorage: " + totalStorage + " slots"
    var textTotal = []
    textTotal.push(totalArmor == 0 ? <Text style={styles.hide}>{textArmor}</Text> 
    : totalArmor == 2 ? <Text style={styles.red}>{textArmor}</Text> 
    : totalArmor == 3 ? <Text style={styles.orange}>{textArmor}</Text> 
    : totalArmor == 4 ? <Text style={styles.green}>{textArmor}</Text> 
    : totalArmor == 5 ? <Text style={styles.blue}>{textArmor}</Text> 
    : totalArmor == 6 ? <Text style={styles.purple}>{textArmor}</Text> 
    : <Text style={styles.grey}>{textArmor}</Text>)
    textTotal.push(totalSpeed == 0 ? <Text style={styles.hide}>{textSpeed}</Text> : <Text style={styles.red}>{textSpeed}</Text>)
    textTotal.push(totalTurn == 0 ? <Text style={styles.hide}>{textTurn}</Text> : <Text style={styles.red}>{textTurn}</Text>)
    textTotal.push(totalErgo == 0 ? <Text style={styles.hide}>{textErgo}</Text> : <Text style={styles.red}>{textErgo}</Text>)
    textTotal.push(totalWeight == 0 ? <Text style={styles.hide}>{textWeight}</Text> : <Text>{textWeight}</Text>)
    textTotal.push(totalStorage == 0 ? <Text style={styles.hide}>{textStorage}</Text> : <Text>{textStorage}</Text>)
    return(textTotal)
  }

  render() {
    var textTotal = this.getCalculations();
    var textShow = this.showStats;
    return (
      <View style={styles.container}>
        {this.state.page === "HomeScreen" && <AppMain textTotal={textTotal} currentHelm={this.state.currentHelm} currentFaceshield={this.state.currentFaceshield} currentHeadset={this.state.currentHeadset} currentVest={this.state.currentVest} currentRig={this.state.currentRig} currentArmoredRig={this.state.currentArmoredRig} currentBackpack={this.state.currentBackpack}/>}
        {this.state.page === "Helmet + Faceshield" && <AppHelmet textTotal={textShow} setItem={this.setHelm} currentItem={this.state.currentHelm} currentFace={this.state.currentFaceshield} />}
        {/* {this.state.page === "Faceshield" && <AppFaceShield textTotal={textShow} setItem={this.setFaceshield} currentItem={this.state.currentFaceshield}/>} */}
        {this.state.page === "Headset" && <AppHeadset textTotal={textShow} setItem={this.setHeadset} currentItem={this.state.currentHeadset}/>}
        {this.state.page === "Vest" && <AppVest textTotal={textShow} setItem={this.setVest} currentItem={this.state.currentVest}/>}
        {this.state.page === "Rig" && <AppRig textTotal={textShow} setItem={this.setRig} currentItem={this.state.currentRig}/>}
        {this.state.page === "ArmoredRig" && <AppArmoredRig textTotal={textShow} setItem={this.setArmoredRig} currentItem={this.state.currentArmoredRig}/>}
        {this.state.page === "Backpack" && <AppBackpack textTotal={textShow} setItem={this.setBackpack} currentItem={this.state.currentBackpack}/>}
        {/* {this.state.page === "Save/Load" && <Text textTotal={textShow} style={styles.text} setItem={this.setHeadset} currentItem={this.state.currentHeadset}>Save/Load</Text>} */}

        <Tabbar
          stateFunc={(tab) => {
            this.setState({page: tab.page})
            //this.props.navigation.setParams({tabTitle: tab.title})
          }}
          activePage={this.state.page}
          tabs={[
            {
              page: "HomeScreen",
              icon: "home",
            },
            {
              page: "Helmet + Faceshield",
              icon: "happy",
            },
            // {
            //   page: "Faceshield",
            //   icon: "grid",
            //   // badgeNumber: 11,
            // },
            {
              page: "Headset",
              icon: "headset",
            },
            {
              page: "Vest",
              icon: "body",
            },
            {
              page: "Rig",
              icon: "person",
            },
            {
              page: "ArmoredRig",
              icon: "person-add",
            },
            {
              page: "Backpack",
              icon: "briefcase",
            },
            // {
            //   page: "Save/Load",
            //   icon: "cog",
            // },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 40,
  },
  hide: {
    color: '#303030'
  },
  red: {
    color: '#ff0000'
  },
  orange: {
    color: '#ff8C00'
  },
  green: {
    color: '#00ff00'
  },
  blue: {
    color: '#0000ff'
  },
  purple: {
    color: '#9400D3'
  }
});