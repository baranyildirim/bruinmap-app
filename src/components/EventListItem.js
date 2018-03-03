import React, { Component } from 'react';
import { 
    View, 
    Text, 
    ActivityIndicator, 
    StyleSheet, 
    TouchableOpacity, 
    LinearGradient, 
    Image 
} from 'react-native';

export default class EventListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
            location: props.location,
            timeInterval: props.time,
            category: props.category,
            icon: null
        };

        
    }

    componentWillMount(){
        if(this.state.name.length > 20)
            this.setState({name: `${this.state.name.substr(0, 20)}...`});
        if(this.state.description.length > 200)
            this.setState({description: `${this.state.description.substr(0, 200)}...`});
        switch (this.state.category){
            case "THEATER": this.setState({icon: require('../assets/icons/THEATER.png') }); break;
            case "COMEDY_PERFORMANCE": this.setState({icon: require('../assets/icons/COMEDY_PERFORMANCE.png') }); break;
            case "FOOD": this.setState({icon: require('../assets/icons/FOOD.png') }); break;
            case "MUSIC": this.setState({icon: require('../assets/icons/MUSIC.png') }); break;
            case "PARTY": this.setState({icon: require('../assets/icons/PARTY.png') }); break;
            default: this.setState({icon: require('../assets/icons/ANY.png') }); break;
        }
    }
    render(){
        return(

            <TouchableOpacity style={styles.listView}>
                <View style={styles.innerContainer}>
                    <View style={styles.iconContainer}>
                        <Image 
                         style={{width: 50, height: 50}}
                         source={this.state.icon}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.titleView}>
                            <View style={styles.nameView}><Text style={styles.nameText}>{`${this.state.name}`}</Text></View>
                            <View style={styles.timeView}><Text style={styles.timeText}>{this.state.timeInterval}</Text></View>
                        </View>
                        <View style={{flex: 1}}><Text style={styles.locationText}>{this.state.location}</Text></View>
                        <Text style={styles.descriptionText}>{this.state.description}</Text>
                    </View>
                </View>
            </TouchableOpacity>


        );
    }
}

const styles = StyleSheet.create({
    listView:{ //Most outer layer
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor:'white',
        borderBottomColor: 'black',
        alignItems: 'stretch',
        elevation: 0,
        padding: 15,
        flex: 1,
    }, 
    innerContainer:{
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',    
    },
    iconContainer:{
        flex: 1,
    },
    icon:{
        width: 30,
        height: 50,
    },
    textContainer:{
        flexDirection: 'column',
        flex: 4,
    },
    titleView:{ // View containing event name and time
        flexDirection: 'row',
        alignItems:'flex-end',
        flex: 1,

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
        fontWeight: 'normal',
        fontFamily: 'sans-serif-light',
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
    },
});