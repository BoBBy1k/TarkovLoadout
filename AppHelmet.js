import React, { Component } from 'react';
import {StyleSheet, Text, ScrollView, Button } from 'react-native';
import {getHelm , helm_list } from './list_helm.js';
import {getFaceshields, faceshields_list} from './list_faceshields.js';
import HelmListItem from './AppHelmetItem.js';

export default class AppHelmet extends Component {
    constructor(props) {
        super(props);
      };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Helmet + Faceshield</Text>
        <Text style={styles.calculations}>{this.props.textTotal}</Text>
            <Button onPress={() => {alert('You tapped the button!');}} title="Press Me" />
            {helm_list.map((helm, i) => <HelmListItem helm={helm} index={i} setItem={this.props.setItem}/>)}
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