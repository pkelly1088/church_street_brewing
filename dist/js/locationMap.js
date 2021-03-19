/*
Name: Patrick Kelly
Course: ICT4510 Advanced Website Design and Management

This sets the map for the contact page, the parameters for the map, the custom map style, and location.*/

let myMap = L.map('mapid').setView([42.172210, -71.141687], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/pkelly1188/cklsth27y08y817qfo8a794ap/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGtlbGx5MTE4OCIsImEiOiJja2w3M2RzYnMxb2Y5Mm5tbTZxemNvcm40In0.UmOfA-d1pgbB4FQK22lhzQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicGtlbGx5MTE4OCIsImEiOiJja2w3M2RzYnMxb2Y5Mm5tbTZxemNvcm40In0.UmOfA-d1pgbB4FQK22lhzQ'
}).addTo(myMap);

// this defines the iceon for the map with its size, anchor point, and pop up location
var churchLogo = L.icon({
    iconUrl: './images/church-street-map-marker.png',
    iconSize:     [53, 75], // size of the icon
    iconAnchor:   [26, 75], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -75] // point from which the popup should open relative to the iconAnchor
});


//This determines where the icon is on the map, inserts the custom image, and binds a pop up to it
L.marker([42.172210, -71.141687], {icon: churchLogo}).addTo(myMap).bindPopup('<p>Church Street Brewing Co.</p>');
