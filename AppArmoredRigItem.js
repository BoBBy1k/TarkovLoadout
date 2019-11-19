import React, { Component } from 'react';
import {StyleSheet, Image, TouchableHighlight } from 'react-native';
import {getArmoredRig,getArmoredRigStorage , armoredrig_list } from './list_armoredrig.js';

export default class ArmoredRigListItem extends Component {
    constructor(props) {
        super(props);
      };
  
  render() {
    return (
            <TouchableHighlight onPress={() => {this.props.setItem(this.props.index)}}>
                <Image style={styles.imagestyle} source={getArmoredRig(this.props.index)} />
            </TouchableHighlight>
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