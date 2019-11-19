import React, { Component } from 'react';
import {StyleSheet, Text, ScrollView, Button, View} from 'react-native';
import {getBackpack, backpack_list} from './list_backpack.js';
import BackpackListItem from './AppBackpackItem.js';

export default class AppBackpack extends Component {
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
        <Text style={styles.name}>{backpack_list[this.state.currentItem]["name"]}</Text>
        <Text style={styles.calculations}>{this.props.textTotal(backpack_list, this.state.currentItem)}</Text>
        <Button onPress={() => {this.props.setItem(this.state.currentItem)}} title="Save" />
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Backpack</Text>
          {backpack_list.map((backpack, i) => <BackpackListItem backpack={backpack} index={i} setItem={this.viewItem}/>)}
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
  name: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 10,
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