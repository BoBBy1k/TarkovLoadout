import React, { Component } from 'react';
import {View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import {getRig, getRigStorage, rig_list} from './list_rig.js';

export default class RigListItem extends Component {
    constructor(props) {
        super(props);
      };
  
  render() {
    return (
    <View>
      <TouchableHighlight onPress={() => {this.props.setItem(this.props.index)}}>
          <Image style={styles.imagestyle} source={getRig(this.props.index)} />
      </TouchableHighlight>
      {this.props.index == 0 ? null : <Image style={styles.imagestyle} source={getRigStorage(this.props.index)} />}
    </View>
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
      marginTop: 30,
    },
  });