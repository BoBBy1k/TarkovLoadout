import React, { Component } from 'react';
import {StyleSheet, Text, ScrollView, Button } from 'react-native';
import {getArmoredRig,getArmoredRigStorage , armoredrig_list } from './list_armoredrig.js';
import AppArmoredRigItem from './AppArmoredRigItem.js';

export default class AppArmoredRig extends Component {
    constructor(props) {
        super(props);
      };
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Armored Rig</Text>
        <Text style={styles.calculations}>{this.props.textTotal}</Text>
            <Button onPress={() => {alert('You tapped the button!');}} title="Press Me" />
            {armoredrig_list.map((armoredrig, i) => <ArmoredRigListItem armoredrig={armoredrig} index={i} setItem={this.props.setItem}/>)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 30,
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
});