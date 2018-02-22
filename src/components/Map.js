import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken('pk.eyJ1IjoiYmFyYW55aWxkaXJpbSIsImEiOiJjamR2ZHd5dWwzb3hoMndvNGRod2NwdGI3In0.AG90Y3pom5hxlMhw9fpvyw');


const UCLA = [-118.445320, 34.066915];


export default class Map extends Component {
    constructor (props) {
        super(props);    
    
    }
    
    render() {
      return (
        <View style={styles.container}>
          <MapboxGL.MapView
            styleURL={MapboxGL.StyleURL.Street}
            zoomLevel={13.90}
            centerCoordinate={UCLA}
            pitch={0}
            style={styles.container}
            animated={true}
            >
          </MapboxGL.MapView>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });