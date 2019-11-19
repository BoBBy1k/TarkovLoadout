import React, { Component } from 'react';
import {StyleSheet, Text, ScrollView, Button } from 'react-native';
import {getFaceshields, faceshields_list} from './list_faceshields.js';
import FaceshieldListItem from './AppFaceShieldItem.js';

export default class AppFaceshield extends Component {
    constructor(props) {
        super(props);
      };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Faceshield</Text>
        <Text style={styles.calculations}>{this.props.textTotal}</Text>
            <Button onPress={() => {alert('You tapped the button!');}} title="Press Me" />
            {faceshields_list.map((shield, i) => <FaceshieldListItem shield={shield} index={i} setItem={this.props.setItem}/>)}
      </ScrollView>
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
    color: '#ffffff',
    marginTop: 30,
  },
  calculations: {
    flex: 1,
    fontSize: 20,
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
});