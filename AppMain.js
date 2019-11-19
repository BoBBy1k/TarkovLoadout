import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Picker } from 'react-native';
import {getHelm , helm_list } from './list_helm.js';
import {getFaceshields, faceshields_list} from './list_faceshields.js';
import {getHeadset, headsets_list} from './list_headsets.js';
import {getVest , vest_list } from './list_vest.js';
import {getRig, getRigStorage, rig_list} from './list_rig.js';
import {getArmoredRig,getArmoredRigStorage , armoredrig_list } from './list_armoredrig.js';
import {getBackpack, backpack_list} from './list_backpack.js';

export default class AppMain extends Component {
    constructor(props) {
        super(props);
        this.state = {     
            active: false,
        };
      };
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Tarkov Loadout App</Text>
        <Text style={styles.calculations}>{this.props.textTotal}</Text>
        <View style={styles.image1Container}>
          <Image source={getHelm(this.props.currentHelm)} style={styles.image} />
          <Image source={getHeadset(this.props.currentHeadset)} style={styles.image} />
        </View>
        <View style={styles.image2Container}>
          <Image source={getFaceshields(this.props.currentFaceshield)} style={styles.imageFaceshield} />
          <Image source={getVest(this.props.currentVest)} style={styles.image} />
          <Image source={getRig(this.props.currentRig)} style={styles.image} />
          <Image source={getRigStorage(this.props.currentRig)} style={styles.image} />
          <Image source={getBackpack(this.props.currentBackpack)} style={styles.image} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  image1Container: {
    flex: 1,    
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    marginTop: 20,
  },
  image2Container: {
    flex: 3,    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  calculations: {
    flex: 1,
    fontSize: 20,
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  imageFaceshield: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 40,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 30,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});