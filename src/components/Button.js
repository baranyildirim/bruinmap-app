import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';


export default class Button extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return(
      <TouchableHighlight
        underlayColor="#B5B5B5"
        onPress={() => {
          this.props.onPress();
        }}>
        <Text>Button</Text>
      </TouchableHighlight>
    )    
  }
}