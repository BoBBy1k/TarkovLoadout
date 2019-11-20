import React, { Component } from 'react';
import {StyleSheet, Text, ScrollView, Button, View } from 'react-native';
import {getArmoredRig,getArmoredRigStorage , armoredrig_list } from './list_armoredrig.js';
import AppArmoredRigItem from './AppArmoredRigItem.js';

export default class AppArmoredRig extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentItem: this.props.currentItem
        };
        this.viewItem=this.viewItem.bind(this);
      };
  viewItem(input) {
    this.setState({ currentItem: input })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{armoredrig_list[this.state.currentItem]["name"]}</Text>
        <Text style={styles.calculations}>{this.props.textTotal(armoredrig_list, this.state.currentItem)}</Text>
        <Button onPress={() => {this.props.setItem(this.state.currentItem)}} title="Save" />
        <ScrollView style={styles.container2}>
          <Text style={styles.title}>Armored Rig</Text>
         {armoredrig_list.map((armoredrig, i) => <AppArmoredRigItem armoredrig={armoredrig} index={i} setItem={this.viewItem} currentItem={this.props.currentItem} currentView={this.state.currentItem} />)}
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
    marginTop: 15,
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