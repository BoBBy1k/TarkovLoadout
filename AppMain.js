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
      <View style={styles.container}>
          <Text style={styles.title}>Tarkov Loadout Builder</Text>
          <Text style={styles.calculations}>{this.props.textTotal}</Text>
        <ScrollView style={styles.container2}>
          <View style={styles.image1Container}>
            <Image source={getHelm(this.props.currentHelm)} style={styles.image} />
            <Image source={getHeadset(this.props.currentHeadset)} style={styles.image} />
          </View>
          <View style={styles.image2Container}>
            <Image source={getFaceshields(this.props.currentFaceshield)} style={styles.image} />
            <Image source={getVest(this.props.currentVest)} style={styles.image} />
            <Image source={getRig(this.props.currentRig)} style={styles.image} />
            <Image source={getRigStorage(this.props.currentRig)} style={styles.image} />
            <Image source={getBackpack(this.props.currentBackpack)} style={styles.image} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container2: {
    flex: 1,
    backgroundColor: '#000000',
    marginBottom: 60
  },
  name: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 10,
  },
  calculations: {
    fontSize: 20,
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 5,
  },
  image1Container: {
    flex: 1,    
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  image2Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});