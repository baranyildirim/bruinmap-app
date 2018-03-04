import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements'
import Title from './Title';
import DrawerButton from './DrawerButton'


export default class AppHeader extends Component {
    render(){
        return(
            <Header
            outerContainerStyles={{backgroundColor: 'transparent', borderBottomColor: 'rgba(0, 0, 0, .3)', 
            height: 55, borderBottomWidth: StyleSheet.hairlineWidth, elevation: 5, marginLeft: -5, marginRight: -5,}}
            innerContainerStyles={{alignItems:'center', paddingLeft: 5, paddingRight: 5, justifyContent:'space-between'}}
            leftComponent={<DrawerButton openDrawer={() => {this.props.openDrawer();}}/> }
            centerComponent={<Title/>}
            rightComponent={{icon:'settings', color: 'black'}}
            />
        );
    }
}   