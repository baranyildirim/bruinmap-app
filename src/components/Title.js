import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'

export default class Title extends Component {
  render(){
    return(
      <View style={{flexDirection: 'row', justifyContent:'center'}}>
        <Image 
        style={{width: 30, height: 40}}
        source={require('../assets/map-icon.png')} />
      </View>
    );
  }
}