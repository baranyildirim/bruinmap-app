import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Map from './components/Map';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import AppHeader from './components/AppHeader';
import EventList from './components/EventList';
import Drawer from 'react-native-drawer'
import ControlPanel from './components/ControlPanel';



class MapScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Map/>
      </View>
    );
  }
}

class ListScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <EventList/>
      </View>
    );
  }
}

const TabNav = TabNavigator(
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

export default class App extends Component {
  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };

  render(){
    return(
      <View style={{flex: 1}}>
      <AppHeader/>
      <TabNav/>
      </View>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}