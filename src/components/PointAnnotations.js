import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import {getTodaysEventsCoordinates, getTodaysEventsNames} from '../utils/events';

export async function createPointAnnotations(){
    let promiseCoordinates = Promise.resolve(getTodaysEventsCoordinates());
    let eventsCoordinates = await promiseCoordinates;

    let promiseNames = Promise.resolve(getTodaysEventsNames());
    let eventsNames = await promiseNames;
    
    console.log("events coordinates", eventsCoordinates);
    console.log("events names", eventsNames);
    var PointAnnotations = [];
    for(var i = 0; i < eventsCoordinates.length; i++){
        PointAnnotations.push(<MapboxGL.PointAnnotation 
                            key={`${i}`}
                            title={eventsNames[i]}
                            id={`id${i}`}
                            coordinate={eventsCoordinates[i].coordinates}
                        />);
    }
    console.log("Point Annotations", PointAnnotations);
    return PointAnnotations;
}


