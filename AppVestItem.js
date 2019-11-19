import React, { Component } from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import {getVest , vest_list } from './list_vest.js';

export default class AppVestListItem extends Component {
    constructor(props) {
        super(props);
      };
  
  render() {
    return (
      <TouchableHighlight style={styles.imagestyle} onPress={() => {this.props.setItem(this.props.index)}}>
          {this.props.index == this.props.currentItem ? 
          <Image style={styles.activeimagestyle} source={getVest(this.props.index)} /> 
          : this.props.index == this.props.currentView ? 
          <Image style={styles.viewimagestyle} source={getVest(this.props.index)} /> 
          : <Image source={getVest(this.props.index)} />}

      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  imagestyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
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