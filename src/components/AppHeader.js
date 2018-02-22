import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'
import Title from './Title.js';

export default class AppHeader extends Component {
    render(){
        return(
            <Header
            outerContainerStyles={{backgroundColor: 'transparent', borderBottomColor: 'rgba(0, 0, 0, .3)', 
            height: 55, borderBottomWidth: StyleSheet.hairlineWidth}}
            innerContainerStyles={{alignItems:'center'}}
            leftComponent={{ icon: 'menu', color: 'black' }}
            centerComponent={<Title/>}
            rightComponent={{icon:'home', color: 'black'}}
            />
        );
    }
}   