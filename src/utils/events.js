import React from 'react';



function getTodaysEventsFromApi(date){
    var dateInput = new Date();

    if(date != undefined)
        dateInput = date;

    var dateString = `${dateInput.getMonth()+1}.${dateInput.getDate()}.${dateInput.getFullYear()}`;
    var apiUrl = `http://api.ucladevx.com/events/event-date/${dateString}`;

    return fetch(apiUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.features);
        return responseJson.features;
      })
      .catch((error) => {
        console.error(error);
      });
}

export async function getTodaysEventsCoordinates(date){
    var promise = Promise.resolve(getTodaysEventsFromApi(date));
    var result = await promise;
    console.log("result", result);
    var events = new Array();

    for(var i = 0; i < result.length; i++){
        events.push(result[i].geometry.coordinates);
    }
    return events;
}

export async function getTodaysEventsNames(date){
   var promise = Promise.resolve(getTodaysEventsFromApi(date));
   var result = await promise;
   var events = new Array();

   for(var i = 0; i < result.length; i++){
       let eventName = result[i].properties.event_name;
       events.push(eventName);
   }
   return events;
}

export async function getTodaysEventsDescriptions(date){
    var promise = Promise.resolve(getTodaysEventsFromApi(date));
    var result = await promise;
    var events = new Array();
 
    for(var i = 0; i < result.length; i++){
        let eventDescription = result[i].properties.description;
        events.push(eventDescription);
    }
    return events;
}

export async function getTodaysEventsTimes(date){
    var promise = Promise.resolve(getTodaysEventsFromApi(date));
    var result = await promise;
    var events = new Array();
 
    for(var i = 0; i < result.length; i++){
        let eventDateBegin = result[i].properties.start_time.split(' ');
        let eventDateEnd = result[i].properties.end_time.split(' ');

        /*
        Below is old approach for converting api time to hours
        let eventDateBegin = new Date(result[i].properties.start_time);
        let eventDateEnd = new Date(result[i].properties.end_time);
        let eventDateStartHours = eventDateBegin.getHours();
        let eventDateStartMinutes = eventDateBegin.getMinutes();
        let eventDateEndHours = eventDateEnd.getHours();
        let eventDateEndMinutes = eventDateEnd.getMinutes();
        let startTime = new String(`${eventDateStartHours}:${eventDateStartMinutes}`);
        let endTime = new String(`${eventDateEndHours}:${eventDateEndMinutes}`);
        
        if(eventDateStartMinutes == 0)
            startTime += 0;
        
        if(eventDateEndMinutes == 0)
            endTime += 0;

        */

        startTime = (eventDateBegin[4] != undefined) ? eventDateBegin[4].substr(0,5) : undefined;
        endTime = (eventDateEnd[4] != undefined ) ? eventDateEnd[4].substr(0,5) : undefined;
        let eventTime = [startTime, endTime];
        events.push(eventTime);
    }
    return events;
}

export async function getTodaysEventsLocations(date){
    var promise = Promise.resolve(getTodaysEventsFromApi(date));
    var result = await promise;
    var events = new Array();
 
    for(var i = 0; i < result.length; i++){
        let eventLocation = result[i].properties.venue;
        events.push(eventLocation);
    }
    return events;
}

export async function getTodaysEventsCategories(date){
    var promise = Promise.resolve(getTodaysEventsFromApi(date));
    var result = await promise;
    var events = new Array();
 
    for(var i = 0; i < result.length; i++){
        let eventCategory = result[i].properties.category;
        events.push(eventCategory);
    }
    return events;
}


export async function getTodaysEventsPictures(date){
    var promise = Promise.resolve(getTodaysEventsFromApi(date));
    var result = await promise;
    var events = new Array();
 
    for(var i = 0; i < result.length; i++){
        let eventPicture = result[i].properties.cover_picture;
        events.push(eventPicture);
    }
    return events;
}







