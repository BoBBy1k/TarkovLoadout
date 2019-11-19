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
      <View style={styles.container}>
        <Text style={styles.name}>{armoredrig_list[this.props.currentItem]["name"]}</Text>
        <Text style={styles.calculations}>{this.props.textTotal}</Text>
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Armored Rig</Text>
          <Button onPress={() => {alert('You tapped the button!');}} title="Press Me" />
          {armoredrig_list.map((armoredrig, i) => <AppArmoredRigItem armoredrig={armoredrig} index={i} setItem={this.props.setItem}/>)}
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
    marginTop: 30,
  },
  calculations: {
    fontSize: 20,
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});