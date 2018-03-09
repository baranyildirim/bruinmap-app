import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {getTodaysEventsDescriptions, 
        getTodaysEventsNames,
        getTodaysEventsTimes,
        getTodaysEventsLocations,
        getTodaysEventsCategories,
        getTodaysEventsPictures
        } from '../utils/events';
import EventListItem from '../components/EventListItem';

export async function createEventListItems(date){
    let promiseNames = Promise.resolve(getTodaysEventsNames(date));
    let promiseDescriptions = Promise.resolve(getTodaysEventsDescriptions(date));
    let promiseLocations = Promise.resolve(getTodaysEventsLocations(date));
    let promiseTimes =  Promise.resolve(getTodaysEventsTimes(date));
    let promiseCategories = Promise.resolve(getTodaysEventsCategories(date));
    let promisePictures = Promise.resolve(getTodaysEventsPictures(date));

    let eventsNames = await promiseNames;
    let eventsDescriptions = await promiseDescriptions;
    let eventsLocations = await promiseLocations;
    let eventsTimes = await promiseTimes;
    let eventsCategories = await promiseCategories;
    let eventsPictures = await promisePictures;

    let EventListItems = [];

    for(var i = 0; i < eventsNames.length; i++){
        let eventTimeInterval = `${eventsTimes[i][0]}-${eventsTimes[i][1]}`;

        if(eventsTimes[i][1] == undefined ){
            eventTimeInterval = `Starts at ${eventsTimes[i][0]}`
        }
        
        
        let eventLocation = (eventsLocations[i].name != undefined) ? 
            eventsLocations[i].name : eventLocation[i].location.street;
        
        let eventDescription = eventsDescriptions[i];
        
        let compactEventDescription = eventsDescriptions[i];
        compactEventDescription = compactEventDescription.replace(/ +(?= )/g,'');
        compactEventDescription = compactEventDescription.replace(/\r?\n|\r/g, ' ');

        if(compactEventDescription == "<NONE>")
            compactEventDescription = "";

        if(eventDescription == "<NONE>")
            eventDescription = "";

        

        let eventCategory = eventsCategories[i];

        if(eventCategory == "<NONE>")
            eventCategory = "Any";

        EventListItems.push(<EventListItem
            name={eventsNames[i]}
            description={eventDescription}
            compactdescription={compactEventDescription}
            location={eventLocation}
            time={eventTimeInterval}
            category={eventCategory}
            picture={eventsPictures[i]}
            >
            </EventListItem>);
    }

    return EventListItems;
}