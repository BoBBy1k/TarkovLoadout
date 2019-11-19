import React, { Component } from 'react';
import {StyleSheet, Text, ScrollView, Button, View } from 'react-native';
import {getVest , vest_list } from './list_vest.js';
import AppVestListItem from './AppVestItem';

export default class AppVest extends Component {
    constructor(props) {
        super(props);
      };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{vest_list[this.props.currentItem]["name"]}</Text>
        <Text style={styles.calculations}>{this.props.textTotal}</Text>
        <Button onPress={() => {alert('You tapped the button!');}} title="Press Me" />
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Armored Vest</Text>
            {vest_list.map((vest, i) => <AppVestListItem vest={vest} index={i} setItem={this.props.setItem}/>)}
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