import React, { Component } from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import {getBackpack, backpack_list} from './list_backpack.js';

export default class BackpackListItem extends Component {
    constructor(props) {
        super(props);
      };
  
  render() {
    return (
      <TouchableHighlight style={styles.imagestyle} onPress={() => {this.props.setItem(this.props.index)}}>
          {this.props.index == this.props.currentItem ? 
          <Image style={styles.activeimagestyle} source={getBackpack(this.props.index)} /> 
          : this.props.index == this.props.currentView ? 
          <Image style={styles.viewimagestyle} source={getBackpack(this.props.index)} /> 
          : <Image source={getBackpack(this.props.index)} />}
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