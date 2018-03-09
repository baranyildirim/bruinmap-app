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
          date: new Date
        };
      }

    changeDate(newDate){
        console.log("Date received by Map", newDate);
        this.setState({date: newDate, loaded: 'false'});
        createEventListItems(newDate).then((result)=>{
            this.setState({EventListItems: result});
            this.setState({loaded: 'true'});
          });
    }

    componentWillMount() {
        createEventListItems(this.state.date).then((result)=>{
          this.setState({EventListItems: result});
          this.setState({loaded: 'true'});
        });
      }

    render(){
        if(this.state.loaded === 'true'){
            return(
                <ScrollView style = {{flex: 1, backgroundColor:'rgba(0,0,0, 0.095)'}}>
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