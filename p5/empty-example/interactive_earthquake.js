
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
    console.log("we started looking at the csv");
    csv = loadTable('earthquakes.csv', 'csv', 'header');
    console.log("we finished looking at the csv");

}

function setup() {
    console.log("we finished looking at the csv");

    canvas = createCanvas(500,520);

    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);

    myMap.onChange(draw);
}



function getEarthquakes(){

    var LOE = [];
    //pull all earthquakes from database

    let result = [];

    let obj = {};
    for (let i = 1; i < csv.getRowCount(); i++) {

        tempLat = Number(csv.getString(i, 'latitude'));
        tempLon = Number(csv.getString(i, 'longitude'));

        const pos = myMap.latLngToPixel(tempLat, tempLon);

        //let groupNum = getInnerArray(pos.x, pos.y);
        obj = {lat: pos.x, lng: pos.y, mag: Number(csv.getString(i, 'magnitude'))};

        result.push(obj);
        //LOE[groupNum].push(obj);

    }
    return result;
}

function draw(){
    clear();

    var LOE2 = getEarthquakes();


    for( var i = 0; i < LOE2.length; i++){
        ellipse(LOE2[i].lat, LOE2[i].lng, LOE2[i].mag*myMap.zoom(), LOE2[i].mag*myMap.zoom());
    }

}
