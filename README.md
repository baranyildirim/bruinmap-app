# BruinMap Mobile Application
Mobile application built with React-Native, aimed to help UCLA students keep track of and attend events on campus.
Fetches events at UCLA using [UCLA DevX API](http://api.ucladevx.com)

# NOTE: This project is no longer in development due to Facebook API changes that have made it much harder to get event data.

# They have also made a great alternative to this app: https://www.facebook.com/local/
 

Current features and ones to be implemented:
* [X] API integration and map marker generation
* [X] Basic list screen with event names and brief details
* [X] Event icons based on event category
* [X] Comphrehensive event details when user taps at an event on the list
* [X] Zoom-in when user selects event on map, Zoom-out when user deselects event on map
* [ ] Allow the user to pick dates
* [ ] Filtering events displayed by category on map and list with drawer button
* [ ] Comprehensive directory of places on and near campus
* [ ] Sharing functionality 
* [ ] Navigation to events

Dependencies:
* "@mapbox/geo-viewport": "^0.2.2",
* "@mapbox/react-native-mapbox-gl": "file:../mapbox-react-native-mapbox-gl-6.0.3.tgz",
* "@turf/along": "^4.7.3",
* "@turf/bearing": "^5.0.0",
* "@turf/distance": "^5.0.0",
* "@turf/helpers": "^4.6.0",
* "@turf/line-distance": "^4.7.3",
* "@turf/nearest": "^4.7.3",
* "install": "^0.10.1",
* "mapbox": "^1.0.0-beta9",
* "npm": "^5.3.0",
* "prop-types": "^15.5.10",
* "react": "16.2.0",
* "react-map-gl": "^3.2.4",
* "react-native": "0.53.2",
* "react-native-drawer": "^2.5.0",
* "react-native-elements": "^0.19.0",
* "react-native-vector-icons": "^4.5.0",
* "react-navigation": "^1.1.1",
* "url": "^0.11.0"

env.json containing access key for MapBox should be in root directory (removed for security).

Docs for extra libraries:
* https://github.com/mmazzarolo/react-native-modal-datetime-picker
* https://github.com/mapbox/react-native-mapbox-gl
* https://github.com/root-two/react-native-drawer
* https://github.com/react-native-training/react-native-elements
* https://github.com/oblador/react-native-vector-icons
* https://github.com/react-navigation/react-navigation

Check root package files for more information.

