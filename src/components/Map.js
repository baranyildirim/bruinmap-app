import React, { Component } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import {createPointAnnotations} from '../utils/createPointAnnotations';



MapboxGL.setAccessToken('pk.eyJ1IjoiYmFyYW55aWxkaXJpbSIsImEiOiJjamR2ZHd5dWwzb3hoMndvNGRod2NwdGI3In0.AG90Y3pom5hxlMhw9fpvyw');

const UCLA = [-118.446320, 34.067915];
const bounds = [[-118.46, 34.056],[-118.428, 34.079]];

export default class Map extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loaded: 'false',
        Markers: [],
        date: new Date(),
      };
    }

    handleZoom(zoomLevel){
      this._map.zoomTo(zoomLevel);
    }

    changeDate(newDate){
      console.log("Date received by Map", newDate);
      this.setState({date: newDate, loaded: 'false'});
      createPointAnnotations(this.state.date, this.handleZoom.bind(this), this.resetPosition.bind(this), this.handleMovement.bind(this)).then((result)=>{
        this.setState({Markers: result});
        this.setState({loaded: 'true'});
      });
    }

    handleMovement(lng, lat){
      this._map.setCamera({
        centerCoordinate: [lng, lat],
        zoom: 18,
      })

      
    }

    resetPosition(){
      this._map.setCamera({
        centerCoordinate: UCLA,
        zoom: 13.60,  
        pitch: 0,
        heading: 0,

      })
    }

    componentWillMount() {
      createPointAnnotations(this.state.date, this.handleZoom.bind(this), this.resetPosition.bind(this), this.handleMovement.bind(this)).then((result)=>{
        console.log(result);
        this.setState({Markers: result});
        this.setState({loaded: 'true'});
      });
    }

    
    render() {
      if(this.state.loaded == 'true'){
        return (
          <View style={styles.container}>
            <MapboxGL.MapView
              ref={(ref) => this._map = ref}
              styleURL={MapboxGL.StyleURL.Street}
              zoomLevel={13.60}
              centerCoordinate={UCLA}
              pitch={0}
              bearing={0}
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
          <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <ActivityIndicator size="large"/>
          </View>
        );
      }
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  