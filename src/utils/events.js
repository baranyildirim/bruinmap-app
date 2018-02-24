import React from 'react';

var today = new Date()
//console.log(today);
var date = `${today.getMonth()+1}.${today.getDate()}.${today.getFullYear()}`;
//console.log(date);
var apiUrl = `http://api.ucladevx.com/events/event-date/${date}`;


function getTodaysEventsFromApi(){
    return fetch(apiUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson.features);
        return responseJson.features;
      })
      .catch((error) => {
        console.error(error);
      });
}

export async function getTodaysEventsCoordinates(){
    var promise = Promise.resolve(getTodaysEventsFromApi());
    var result = await promise;
    console.log("result", result);
    var events = new Array();

    for(var i = 0; i < result.length; i++){
        let marker = new Object();
        marker.coordinates = result[i].geometry.coordinates;
        events.push(marker);
    }
    //console.log(marker);
    //console.log(events);
    return events;
}

export async function getTodaysEventsNames(){
   var promise = Promise.resolve(getTodaysEventsFromApi());
   var result = await promise;
   var events = new Array();

   for(var i = 0; i < result.length; i++){
       let eventName = result[i].properties.event_name;
       events.push(eventName);
   }
   return events;
}






