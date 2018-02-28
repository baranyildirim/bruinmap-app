import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView   } from 'react-native';
import EventListItem from './EventListItem';
import {createEventListItems} from '../utils/createEventListItems';


export default class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loaded: 'false',
          EventListItems : [],
        };
      }

    componentWillMount() {
        createEventListItems().then((result)=>{
          this.setState({EventListItems: result});
          this.setState({loaded: 'true'});
        })
      }

    render(){
        if(this.state.loaded === 'true'){
            return(
                <ScrollView style = {{flex: 1}}>
                    {this.state.EventListItems}
                </ScrollView    >
            );
        }
        else{
            return(
                <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                    <ActivityIndicator size="large"/>
                </View>
            );
        }
    }
}