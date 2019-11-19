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
          {this.props.index == this.props.currentItem ? 
          <Image style={styles.activeimagestyle} source={getRig(this.props.index)} /> 
          : this.props.index == this.props.currentView ? 
          <Image style={styles.viewimagestyle} source={getRig(this.props.index)} /> 
          : <Image source={getRig(this.props.index)} />}
      </TouchableHighlight>
      <View style={styles.imagestyle}>
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
  imagestyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    marginBottom: 15
  },
  activeimagestyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#00ff00',  
  },
  viewimagestyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#0000ff',  
  }
});