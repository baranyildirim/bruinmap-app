import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppHeader from './components/AppHeader';
import Drawer from 'react-native-drawer'
import ControlPanel from './components/ControlPanel';
import TabNav from './components/TabNav';


export default class App extends Component {
  state = {
    date: new Date(),
  }

  changeDate(newDate){
    console.log("Date received by App");
    this.setState({date: newDate});
  }

  render(){
    return(
      <Drawer 
      ref={(ref) => this.ControlPanel = ref}
      type="overlay"
      content={<ControlPanel 
      closeDrawer ={() => {this.ControlPanel.close();}}
      />}
      tapToClose={true}
      negotiatePan={true}
      openDrawerOffset={0.2} // 20% gap on the right side of drawer
      panCloseMask={0.2}
      closedDrawerOffset={-3}
      elevation={9}
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}
      >
      <AppHeader
      openDrawer={() => {this.ControlPanel.open();}}
      changeDate={this.changeDate.bind(this)}
      />
      <TabNav
      ref={(ref) => this.TabNav = ref}
      screenProps={{date: this.state.date}}
      />
      </Drawer>
    );
  }
}
