import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {getTodaysEventsDescriptions, 
        getTodaysEventsNames,
        getTodaysEventsTimes,
        getTodaysEventsLocations,
        getTodaysEventsCategories,
        } from '../utils/events';
import EventListItem from '../components/EventListItem';

export async function createEventListItems(){
    let promiseNames = Promise.resolve(getTodaysEventsNames());
    let promiseDescriptions = Promise.resolve(getTodaysEventsDescriptions());
    let promiseLocations = Promise.resolve(getTodaysEventsLocations());
    let promiseTimes =  Promise.resolve(getTodaysEventsTimes());
    let promiseCategories = Promise.resolve(getTodaysEventsCategories());

    let eventsNames = await promiseNames;
    let eventsDescriptions = await promiseDescriptions;
    let eventsLocations = await promiseLocations;
    let eventsTimes = await promiseTimes;
    let eventsCategories = await promiseCategories;

    let EventListItems = [];

    for(var i = 0; i < eventsNames.length; i++){
        let eventTimeInterval = `${eventsTimes[i][0]}-${eventsTimes[i][1]}`;

        if(eventsTimes[i][1] == undefined ){
            eventTimeInterval = `Starts at ${eventsTimes[i][0]}`
        }
        
        
        let eventLocation = (eventsLocations[i].name != undefined) ? 
            eventsLocations[i].name : eventLocation[i].location.street;

        let eventDescription = eventsDescriptions[i];
        eventDescription = eventDescription.replace(/ +(?= )/g,'');
        eventDescription = eventDescription.replace(/\r?\n|\r/g, ' ');

        if(eventDescription == "<NONE>")
            eventDescription = "";

        let eventCategory = eventsCategories[i];

        if(eventCategory == "<NONE>")
            eventCategory = "Any";

        EventListItems.push(<EventListItem
            name={eventsNames[i]}
            description={eventDescription}
            location={eventLocation}
            time={eventTimeInterval}
            category={eventCategory}
            >
            </EventListItem>);
    }

    return EventListItems;
}