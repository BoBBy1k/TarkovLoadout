import React, { Component } from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import {getFaceshields, faceshields_list} from './list_faceshields.js';

export default class FaceshieldListItem extends Component {
    constructor(props) {
        super(props);
      };
  
  render() {
    return (
      <TouchableHighlight style={styles.imagestyle} onPress={() => {this.props.setFace(this.props.index)}}>
          {this.props.index == this.props.currentItem && faceshields_list[this.props.index]['require'].includes(this.props.currentHelm) == true ? 
          <Image style={styles.activeimagestyle} source={getFaceshields(this.props.index)} /> 
          : this.props.index == this.props.currentView && faceshields_list[this.props.index]['require'].includes(this.props.currentHelm) == true ? 
          <Image style={styles.viewimagestyle} source={getFaceshields(this.props.index)} /> 
          : faceshields_list[this.props.index]['require'].includes(this.props.currentHelm) == true ?
          <Image source={getFaceshields(this.props.index)} />
          :<Image />}
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