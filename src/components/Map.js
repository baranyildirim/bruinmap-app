import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import {createPointAnnotations} from './PointAnnotations';



MapboxGL.setAccessToken('pk.eyJ1IjoiYmFyYW55aWxkaXJpbSIsImEiOiJjamR2ZHd5dWwzb3hoMndvNGRod2NwdGI3In0.AG90Y3pom5hxlMhw9fpvyw');

const UCLA = [-118.445320, 34.066915];

export default class Map extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loaded: 'false',
        Markers: []
      };
    }

    componentWillMount() {
      createPointAnnotations().then((result)=>{
        console.log(result);
        this.setState({Markers: result});
        this.setState({loaded: 'true'});
      })
    }

    
    render() {
      if(this.state.loaded == 'true'){
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
            {this.state.Markers}
            </MapboxGL.MapView>
          </View>
        );
      }
      else{
        return(
          <Text>Loading</Text>
        );
      }
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  