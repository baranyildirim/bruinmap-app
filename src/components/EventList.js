import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView   } from 'react-native';
import EventListItem from './EventListItem';




export default class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loaded: 'false',
          EventListItems : [],
        };
      }
      
    componentWillMount(){

    }

    render(){
        return(
            <ScrollView style = {{flex: 1}}>
                {this.state.EventListItems}
            </ScrollView    >
        );
    }
}