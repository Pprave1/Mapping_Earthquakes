// Add console.log to check to see if our code is working.
// console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);
// Create the map object with a center and zoom level.
//let map = L.map("mapid", {
  //center: [
   // 40.7, -94.5
  //],
 // zoom: 4
//});
//  Add a marker to the map for Los Angeles, California.
let marker = L.marker([34.0522, -118.2437]).addTo(map);
// Loop through the cities array and create one marker for each city.
//cities.forEach(function (city) {
  //console.log(city)
// });
// Get data from cities.js
 let cityData = cities;
// Loop through the cities array and create one marker for each city.Plus a thousands separator using tolocalstring 
//cityData.forEach(function (city) {

 // console.log(city)

 // L.marker(city.location)
  //.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  //.addTo(map);

//});
// Loop through the cities array and create one marker for each city.

//Skill Drill 12.4.2 edit the lineweight, add the color orange, radius decreased by 200K
// and dark map

cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000,
        color: 'orange',
        lineweight: 4
    })
       .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")

        .addTo(map);
});


//L.circleMarker([34.0522, -118.2437]).addTo(map);
// Skill drill 13.4.1
L.circleMarker([34.0522, -118.2437], {
  radius: 300,
  color: "black",
  fillColor: '#ffffa1'
}).addTo(map);
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ?? <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);






