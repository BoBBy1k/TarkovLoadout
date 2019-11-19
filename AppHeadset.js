import React, { Component } from 'react';
import {StyleSheet, Text, ScrollView, Button , View} from 'react-native';
import {getHeadset, headsets_list} from './list_headsets.js';
import HeadsetListItem from './AppHeadsetItem';

export default class AppHeadset extends Component {
    constructor(props) {
        super(props);
      };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{headsets_list[this.props.currentItem]["name"]}</Text>
        <Text style={styles.calculations}>{this.props.textTotal}</Text>
        <Button onPress={() => {alert('You tapped the button!');}} title="Press Me" />
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Headset</Text>
          {headsets_list.map((headset, i) => <HeadsetListItem headset={headset} index={i} setItem={this.props.setItem}/>)}
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