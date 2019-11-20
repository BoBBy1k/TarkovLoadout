import React, { Component } from 'react';
import {StyleSheet, Text, ScrollView, Button, View} from 'react-native';
import {getHelm , helm_list } from './list_helm.js';
import {getFaceshields, faceshields_list} from './list_faceshields';
import HelmListItem from './AppHelmetItem.js';

export default class AppHelmet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: this.props.currentItem,
      currentFace: this.props.currentFace
    };
    this.viewItem=this.viewItem.bind(this);
    this.viewFace=this.viewFace.bind(this);
  };
  viewItem(input) {
    this.setState({ currentItem: input })
    if(faceshields_list[this.state.currentFace]['require'].includes(input) == false) {
      this.setState({ currentFace: 0 }) 
    }
  }
  viewFace(input) {
    if(input == 1) {
      this.setState({ currentItem: 0 })
      this.setState({ currentFace: 1 })
    }
    if(input != 1 && faceshields_list[input]['require'].includes(this.state.currentItem) == false) {
      this.setState({ currentFace: 0 }) 
    }
    if(input != 1 && faceshields_list[input]['require'].includes(this.state.currentItem) == true) {
      this.setState({ currentFace: input })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.currentFace == 0 ? 
        <Text style={styles.name}>{helm_list[this.state.currentItem]["name"]}</Text>
        :<Text style={styles.name}>{helm_list[this.state.currentItem]["name"] + ' + ' + faceshields_list[this.state.currentFace]["name"]}</Text>
        }
        <Text style={styles.calculations}>{this.props.textTotal(helm_list, this.state.currentItem, faceshields_list, this.state.currentFace)}</Text>
        <Button style={styles.button} onPress={() => {this.props.setItem(this.state.currentItem, this.state.currentFace)}} title="Save" />
        <ScrollView style={styles.container2}>
          <Text style={styles.title}>Helmet / Faceshield</Text>
          {helm_list.map((helm, i) => <HelmListItem helm={helm} index={i} setItem={this.viewItem} setFace={this.viewFace} currentItem={this.props.currentItem} currentFace={this.props.currentFace} currentView={this.state.currentItem} currentViewFace={this.state.currentFace} />)}
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