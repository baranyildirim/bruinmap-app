import React, { Component } from 'react';
import {View} from 'react-native';
import Map from './Map';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import EventList from './EventList';

class MapScreen extends Component {

  componentWillReceiveProps(nextProp){
    console.log("Date received by MapScreen", nextProp.screenProps.date);
    this.Map.changeDate(nextProp.screenProps.date);
  }

    render() {
      return (
        <View style={{flex: 1}}>
          <Map
          ref={(ref) => this.Map = ref}
          />
        </View>
      );
    }
}
  
class ListScreen extends Component {
  state={
    date: new Date()
  }

  componentWillReceiveProps(nextProp){
    console.log("Date received by ListScreen", nextProp.screenProps);
    this.List.changeDate(nextProp.screenProps.date);
  }
    
  render() {
    return (
      <View style={{flex: 1}}>
        <EventList
        ref={(ref) => this.List = ref}
        />
      </View>
    );
  }
}
  
export default TabNav = TabNavigator(
    {
      Map: { screen: MapScreen },
      List: { screen: ListScreen },
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Map') {
            iconName = `ios-map${focused ? '' : '-outline'}`;
          } else if (routeName === 'List') {
            iconName = `ios-list${focused ? '' : '-outline'}`;
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={30} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        showLabel: false
      },
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      animationEnabled: true,
      swipeEnabled: true,
      lazy: false
    }
  );

  