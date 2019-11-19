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
      <TouchableHighlight style={styles.imagestyle} onPress={() => {this.props.setItem(this.props.index)}}>
          <Image source={getRig(this.props.index)} />
      </TouchableHighlight>
      <View style={styles.imagestyle2}>
      {this.props.index == 0 ? null : <Image source={getRigStorage(this.props.index)} />}
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  imagestyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  imagestyle2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    marginBottom: 15
  }
});