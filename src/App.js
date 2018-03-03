import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppHeader from './components/AppHeader';
import Drawer from 'react-native-drawer'
import ControlPanel from './components/ControlPanel';
import TabNav from './components/TabNav';


export default class App extends Component {
  closeControlPanel = () => {
    this.refs.ControlPanel.close()
  };

  openControlPanel = () => {
    this.refs.ControlPanel.open()
  };

  render(){
    return(
      <Drawer 
      ref={(ref) => this.ControlPanel = ref}
      type="overlay"
      content={<ControlPanel 
      closeDrawer ={() => {this.ControlPanel.close();}}
      />}
      tapToClose={true}
      open={true}
      openDrawerOffset={0.2} // 20% gap on the right side of drawer
      panCloseMask={0.2}
      closedDrawerOffset={-3}
      styles={drawerStyles}
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}
      >
      <AppHeader
      openDrawer={() => {this.ControlPanel.open();}}
      />
      <TabNav/>
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}