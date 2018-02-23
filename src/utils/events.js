import React from 'react';

var today = new Date()
//console.log(today);
var date = `${today.getMonth()+1}.${today.getDate()}.${today.getFullYear()}`;
//console.log(date);
var apiUrl = `http://api.ucladevx.com/events/event-date/${date}`;
//console.log(apiUrl);

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

function getTodaysEventsCoordinates(result){
    //console.log(result);
    var events = new Array();
    var marker = new Object();

    marker.coordinates =[0,0];

    for(var i in result){
        marker.coordinates = result[i].geometry.coordinates;
        //console.log(marker);
        events.push(marker);
    }
    //console.log(marker);
    //console.log(events);
    return events;
}

function getTodaysEventsNames(result){
   //console.log(result);
   var events = new Array();
   var name = new String();

   for(var i in result){
       name = result[i].properties.name;
       //console.log(marker);
       events.push(marker);
   }
   //console.log(marker);
   //console.log(events);
   return events;
}

var todaysEventsCoordinates = getTodaysEventsFromApi().then(getTodaysEventsCoordinates());
todaysEventsCoordinates.then((todaysEventsCoordinates) =>{
    export default todaysEventsCoordinates;
});

var todaysEventsNames = getTodaysEventsFromApi().then(getTodaysEventsNames());
todaysEventsNames.then((todaysEventsNames) => {
    export default todaysEventsNames;
});




