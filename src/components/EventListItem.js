import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

export default class EventListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            description: props.description,
            location: props.location,
            time: props.time,
        };
    }
    render(){
        return(
            <TouchableOpacity style={styles.listView}>
                <View style={styles.titleView}>
                    <View style={styles.nameLocationView}><Text style={styles.nameText}>{`${this.state.title}, ${this.state.location}`}</Text></View>
                    <View style={styles.timeView}><Text>{this.state.time}</Text></View>
                </View>
                <Text>{this.state.description}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    listView:{ //Most outer layer
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderColor: '#d6d7da',
        height: 50,
        margin: 1,
        fontFamily: 'Roboto'
    },  
    titleView:{ // View containing event name, location and time
        flexDirection: 'row',
        flex: 1,
    },
    nameLocationView:{ // View containing event name and location left justified
        flex: 1,
        alignItems:'flex-start'
    },
    timeView:{ // View containing event time justified right
        flex: 1,
        alignItems:'flex-end'
    },
    nameText:{ // Style for event name
        fontWeight: 'bold'

    }
});