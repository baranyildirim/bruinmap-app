import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class DrawerButton extends Component {
    render(){
        return(
            <TouchableOpacity
            style={{flex:1}}
            onPress={() => {this.props.openDrawer();}}
            >
            <Icon 
            name="ios-menu"
            size={30}
            color="black"
            />
            </TouchableOpacity>
        );
    }
}