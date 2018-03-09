import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


export default class ControlPanel extends Component {
  render() {
    return (
      <View style={styles.controlPanel}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  controlPanel:{
    flex: 1,
    backgroundColor: 'white'
  },
});