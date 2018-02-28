import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

export default class EventListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
            location: props.location,
            timeInterval: props.time,
        };
    }

    componentWillMount(){
        if(this.state.name.length > 30)
            this.setState({name: `${this.state.name.substr(0, 30)}...`});
        if(this.state.description.length > 200)
            this.setState({description: `${this.state.description.substr(0, 200)}...`});
    }
    render(){
        return(
            <TouchableOpacity style={styles.listView}>
                <View style={styles.titleView}>
                    <View style={styles.nameView}><Text style={styles.nameText}>{`${this.state.name}`}</Text></View>
                    <View style={styles.timeView}><Text style={styles.timeText}>{this.state.timeInterval}</Text></View>
                </View>
                <View style={{flex: 1}}><Text style={styles.locationText}>{this.state.location}</Text></View>
                <Text style={styles.descriptionText}>{this.state.description}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    listView:{ //Most outer layer
        backgroundColor: '#fff',
        flexDirection: 'column',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#d6d7da',
        alignItems: 'stretch',
        height: 85,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },  
    titleView:{ // View containing event name and time
        flexDirection: 'row',
        fontFamily: 'Roboto',
        flex: 1,
        alignItems:'flex-end'
    },
    nameView:{ // View containing event name left justified
        flex: 3,
        alignItems:'flex-start'
    },
    timeView:{ // View containing event time justified right
        flex: 1,
        alignItems:'flex-end'
    },
    nameText:{ // Style for event name
        fontSize: 15,
        color: 'black'
    },
    timeText:{
        fontSize: 10
    },
    locationText:{
        fontSize: 10
    },
    descriptionText:{
        fontSize: 8
    }
});