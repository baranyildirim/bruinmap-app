import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

export default class Title extends Component {
  render(){
    return(
      <View style={{flexDirection: 'row', justifyContent:'center'}}>
        <View style={{marginRight: 10}}><Text style = {styles.titleTextStyle}>bruin</Text></View>
        
        <Image 
        style={{width: 30, height: 40}}
        source={require('../assets/map-icon.png')} />

        <View style={{marginLeft: 10}}><Text style = {styles.titleTextStyle} >map</Text></View>
        
      </View>
    );
  }
}

styles = StyleSheet.create({
  titleTextStyle : {
    fontSize: 27,
    justifyContent: 'space-between',
    fontFamily: 'Telegrafico'
  }
});