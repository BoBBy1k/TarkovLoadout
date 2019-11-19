import React, { Component } from 'react';
import { StyleSheet, Image, TouchableHighlight, View } from 'react-native';
import {getHelm , helm_list } from './list_helm.js';
import {getFaceshields, faceshields_list} from './list_faceshields.js';
import FaceshieldListItem from './AppFaceShieldItem';
import { Row } from 'native-base';

export default class AppHelmetItem extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <View>
        <TouchableHighlight style={styles.imagestyle} onPress={() => {this.props.setItem(this.props.index)}}>
            {this.props.index == this.props.currentItem ? 
            <Image style={styles.activeimagestyle} source={getHelm(this.props.index)} /> 
            : this.props.index == this.props.currentView ? 
            <Image style={styles.viewimagestyle} source={getHelm(this.props.index)} /> 
            : <Image source={getHelm(this.props.index)} />}
        </TouchableHighlight>
        <View>
            {faceshields_list.map((shield, j) => <FaceshieldListItem currentHelm={this.props.index} shield={shield} index={j} setFace={this.props.setFace} currentItem={this.props.currentFace} currentView={this.props.currentViewFace} />)}
        </View>
      </View>
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