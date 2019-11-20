import React, { Component } from 'react';
import {StyleSheet, Text, ScrollView, Button, View } from 'react-native';
import {getVest , vest_list } from './list_vest.js';
import AppVestListItem from './AppVestItem';

export default class AppVest extends Component {
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
        <Text style={styles.name}>{vest_list[this.state.currentItem]["name"]}</Text>
        <Text style={styles.calculations}>{this.props.textTotal(vest_list, this.state.currentItem)}</Text>
        <Button onPress={() => {this.props.setItem(this.state.currentItem)}} title="Save" />
        <ScrollView style={styles.container2}>
            <Text style={styles.title2}>Armored Vest</Text>
            {vest_list.map((vest, i) => <AppVestListItem vest={vest} index={i} setItem={this.viewItem} currentItem={this.props.currentItem} currentView={this.state.currentItem} />)}
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