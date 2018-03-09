import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import {getTodaysEventsCoordinates, getTodaysEventsNames} from '../utils/events';

export async function createPointAnnotations(date, handleZoom, resetPosition, handleMovement){
    
    let promiseCoordinates = Promise.resolve(getTodaysEventsCoordinates(date));
    let eventsCoordinates = await promiseCoordinates;

    let promiseNames = Promise.resolve(getTodaysEventsNames(date));
    let eventsNames = await promiseNames;
    
    console.log("events coordinates", eventsCoordinates);
    console.log("events names", eventsNames);

    let PointAnnotations = [];
    for(var i = 0; i < eventsCoordinates.length; i++){
        let lng = eventsCoordinates[i][0];
        let lat = eventsCoordinates[i][1];
        PointAnnotations.push(<MapboxGL.PointAnnotation 
                            key={`${i}`}
                            id={`id${i}`}
                            coordinate={eventsCoordinates[i]}
                            onSelected={() => {
                                handleMovement(lng,lat)
                            }}
                            onDeselected={()=>{
                                resetPosition();
                            }}
                        ><MapboxGL.Callout
                            title={`${eventsNames[i]}`}
                            textStyle={{textAlign: 'left'}}
                        ></MapboxGL.Callout></MapboxGL.PointAnnotation>);
    }
    console.log("Point Annotations", PointAnnotations);
    return PointAnnotations;
}


