import React, { Component } from 'react';
import { 
    View, 
    Text, 
    ActivityIndicator, 
    StyleSheet, 
    TouchableOpacity, 
    Image 
} from 'react-native';

export default class EventListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            compactname: props.name,
            description: props.description,
            compactdescription: props.compactdescription,
            location: props.location,
            timeInterval: props.time,
            category: props.category,
            picture: props.picture,
            icon: null,
            compact: true
        };

        
    }
    componentWillMount(){
        if(this.state.compact){
            if(this.state.compactname.length > 20)
                this.setState({compactname: `${this.state.compactname.substr(0, 20)}...`});
            if(this.state.compactdescription.length > 200)
                this.setState({compactdescription: `${this.state.compactdescription.substr(0, 200)}...`});
            switch (this.state.category){
                case "THEATER": this.setState({icon: require('../assets/icons/THEATER.png') }); break;
                case "COMEDY_PERFORMANCE": this.setState({icon: require('../assets/icons/COMEDY_PERFORMANCE.png') }); break;
                case "FOOD": this.setState({icon: require('../assets/icons/FOOD.png') }); break;
                case "MUSIC": this.setState({icon: require('../assets/icons/MUSIC.png') }); break;
                case "PARTY": this.setState({icon: require('../assets/icons/PARTY.png') }); break;
                default: this.setState({icon: require('../assets/icons/ANY.png') }); break;
            }
        }
        console.log("picture", this.state.picture )
    }
    render(){
        if(this.state.compact){
            return(
                <TouchableOpacity style={compactStyles.listView} onPress={() => {
                    this.setState({compact: false});
                }}>
                    <View style={compactStyles.innerContainer}>
                        <View style={compactStyles.iconContainer}>
                            <Image 
                             style={{width: 50, height: 50}}
                             source={this.state.icon}
                            />
                        </View>
                        <View style={compactStyles.textContainer}>
                            <View style={compactStyles.titleView}>
                                <View style={compactStyles.nameView}><Text style={compactStyles.nameText}>{`${this.state.compactname}`}</Text></View>
                                <View style={compactStyles.timeView}><Text style={compactStyles.timeText}>{this.state.timeInterval}</Text></View>
                            </View>
                            <View style={{flex: 1}}><Text style={compactStyles.locationText}>{this.state.location}</Text></View>
                            <Text style={compactStyles.descriptionText}>{this.state.compactdescription}</Text>
                        </View>
                    </View>
                </TouchableOpacity>);
        }
        else{
            return(
                <TouchableOpacity style={expandedStyles.expandedListView} onPress={() => {
                    this.setState({compact: true});
                }}>
                    <View style={expandedStyles.innerContainer}>
                        <Text style={expandedStyles.nameText}>{this.state.name}</Text>
                        <Text style={expandedStyles.timeText}>{this.state.timeInterval}</Text>
                        <Text style={expandedStyles.locationText}>{this.state.location}</Text>
                        <View style={expandedStyles.pictureView}>
                        <Image style={expandedStyles.picture} 
                        resizeMode="stretch"
                        source={{uri: `${this.state.picture}`}}/>
                        </View>
                        <Text style={expandedStyles.descriptionText}>{this.state.description}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
    }
}

const compactStyles = StyleSheet.create({
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
    pictureView:{
        flex: 1
    },

});

const expandedStyles = StyleSheet.create({
    expandedListView:{
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor:'white',
        borderBottomColor: 'black',
        alignItems: 'stretch',
        elevation: 0,
        padding: 15,
        flex: 1
    }, 
    nameText:{
        fontSize: 25,
        fontWeight: 'normal',
        fontFamily: 'sans-serif-light',
        color: 'black'
    },
    timeText:{
        fontSize: 17,
        color: 'black'
    },
    locationText:{
        fontSize: 17,
        color: 'black'
    },
    picture:{
        flex: 1,
        height: 150,
        width: undefined,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    pictureView:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      
    },
    descriptionText:{
        color: 'black'
    }

});
