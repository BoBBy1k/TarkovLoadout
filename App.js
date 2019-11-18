import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import {getHelm , helm_list } from './list_helm.js';
import {getFaceshields, faceshields_list} from './list_faceshields.js';
import {getHeadset, headsets_list} from './list_headsets.js';
import {getVest , vest_list } from './list_vest.js';
import {getRig, getRigStorage, rig_list} from './list_rig.js';
import {getArmoredRig,getArmoredRigStorage , armoredrig_list } from './list_armoredrig.js';
import {getBackpack, backpack_list} from './list_backpack.js';
import {getCalculations} from './list_backpack.js';

export default class App extends Component {
  state ={
    currentHelm: 9,
    currentFaceshield: 0,
    currentSet: 0,
    currentVest: 3,
    currentRig: 1,
    currentArmoredRig: 0,
    currentBackpack: 0,
    active: false
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tarkov Loadout</Text>
        <Text style={styles.calculations}>{getCalculations()}</Text>
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
  calculations: {
    flex: 1,
    fontSize: 20,
    color: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
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
