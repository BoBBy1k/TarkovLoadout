import React, { Component } from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import {getFaceshields, faceshields_list} from './list_faceshields.js';

export default class FaceshieldListItem extends Component {
    constructor(props) {
        super(props);
      };
  
  render() {
    return (
      <TouchableHighlight onPress={() => {this.props.setItem(this.props.index)}}>
          <Image style={styles.imagestyle} source={getFaceshields(this.props.index)} />
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