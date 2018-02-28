import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

export default class Title extends Component {
  render(){
    return(
      <View style={{flexDirection: 'row', justifyContent:'center'}}>
        <Text style = {styles.titleTextStyle}></Text>
        <Image 
        style={{width: 30, height: 40}}
        source={require('../assets/map-icon.png')} />
        <Text style = {styles.titleTextStyle} ></Text>
      </View>
    );
  }
}

styles = StyleSheet.create({
  titleTextStyle : {
    fontSize: 27,
    color: '#ffb300',
    justifyContent: 'space-between'
  }
});