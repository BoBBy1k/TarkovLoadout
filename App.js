import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import {getBackpack, backpack_list} from './list_backpack.js';
import {getFaceshields, faceshields_list} from './list_faceshields.js';
import {getHeadset, headsets_list} from './list_headsets.js';
import {getHelm , helm_list } from './list_helm.js';
import {getRig, getRigStorage, rig_list} from './list_rig.js';
import {getArmoredRig,getArmoredRigStorage , armoredrig_list } from './list_armoredrig.js';
import {getVest , vest_list } from './list_vest.js';


export default class App extends Component {
  state ={
    currentBackpack: 0,
    currentFaceshield: 0,
    currentHeadphones: 0,
    currentHelm: 9,
    currentRig: 1,
    currentVest: 3,
    currentArmoredRig: 0,
    active: false
  };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Tarkov Loadout</Text>
        {/* <Image source={require('./assets/vest/00-3M.png')}/>
        {/* <Image source={{uri: './assets/vest/00-3M.png'}} /> */}
        <Image source={getHelm(this.state.currentHelm)} style={styles.image} />
        <Image source={getVest(this.state.currentVest)} style={styles.image} />
        <Image source={getRig(this.state.currentRig)} style={styles.image} />
        {/* <Image source={getHelm(this.state.currentHelm)} style={styles.image} />
        <Image source={getHelm(this.state.currentHelm)} style={styles.image} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
