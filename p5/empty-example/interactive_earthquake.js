
var csv;
const options = {
    lat: 0,
    lng: 0,
    zoom: 1,
    style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

var mappa = new Mappa('Leaflet');

var myMap;
var canvas;

function preload() {
    csv = loadTable('http://127.0.0.1:8080/earthquakes.csv', 'csv', 'header');
}

function setup() {

    canvas = createCanvas(500,520);

    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);

    myMap.onChange(draw);
}



function getEarthquakes(){

    var LOE = {};

    //pull all earthquakes from database

    let result = [];

    let obj = {};

    for (let i = 1; i < csv.getRowCount(); i++) {

        tempLat = Number(csv.getString(i, 'latitude'));
        tempLon = Number(csv.getString(i, 'longitude'));

        const pos = myMap.latLngToPixel(tempLat, tempLon);

        //let groupNum = getInnerArray(pos.x, pos.y);

        obj[headers[latitude]] = tempLat;
        obj[headers[longitude]] = tempLon;
        obj[headers[magnitude]] = Number(csv.getString(i, 'magnitude'));

        LOE.push(obj);
        //LOE[groupNum].push(obj);

    }
    return LOE;
}

function getInnerArray(lat, lon){

    width = myMap.options.width / 10;
    height = myMap.options.height /10;


    var firstDigit = (lat/width).floor * 10;
    var secondDigit = (lon/height).floor;

    var placeInArray = firstDigit + secondDigit;

    return placeInArray;
}

function draw(){

    //get image of map
    var LOE = getEarthquakes();

    for( var i = 0; i < csv.getRowCount(); i++){
        ellipse(LOE.latitude, LOE.longitude, LOE.magnitude*100, LOE.magnitude*100);
    }



}

function get2DArray(size){

    size = size > 0 ? size :0;

    var arr = [];

    while(size--){
        arr.push([]);
    }

    return arr;
}
