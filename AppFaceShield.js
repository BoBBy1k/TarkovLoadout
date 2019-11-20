import React, { Component } from 'react';
import {StyleSheet, Text, ScrollView, Button, View} from 'react-native';
import {getFaceshields, faceshields_list} from './list_faceshields.js';
import FaceshieldListItem from './AppFaceShieldItem.js';

export default class AppFaceshield extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: this.props.currentItem
    };
    this.viewItem=this.viewItem.bind(this);
  };
  viewItem(input) {
    this.setState({ currentItem: input })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{faceshields_list[this.state.currentItem]["name"]}</Text>
        <Text style={styles.calculations}>{this.props.textTotal(faceshields_list, this.state.currentItem)}</Text>
        <Button onPress={() => {this.props.setItem(this.state.currentItem)}} title="Save" />
        <ScrollView style={styles.container2}>
          <Text style={styles.title}>Faceshield</Text>
          {faceshields_list.map((shield, i) => <FaceshieldListItem shield={shield} index={i} setItem={this.viewItem} currentItem={this.props.currentItem} currentView={this.state.currentItem} />)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container2: {
    flex: 1,
    backgroundColor: '#000000',
    marginBottom: 60
  },
  name: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 15,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 30,
  },
  calculations: {
    fontSize: 20,
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});