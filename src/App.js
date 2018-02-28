import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Map from './components/Map';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import AppHeader from './components/AppHeader';
import EventList from './components/EventList';


class MapScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppHeader/>
        <Map/>
      </View>
    );
  }
}

class ListScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppHeader/>
        <EventList/>
      </View>
    );
  }
}

export default TabNavigator(
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
    animationEnabled: false,
    swipeEnabled: false,
  }
);

