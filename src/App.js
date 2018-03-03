import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppHeader from './components/AppHeader';
import Drawer from 'react-native-drawer'
import ControlPanel from './components/ControlPanel';
import TabNav from './components/TabNav';


export default class App extends Component {
  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };

  render(){
    return(
      <View style={{flex: 1}}>
      <AppHeader/>
      <TabNav/>
      </View>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}