import * as mappa from "../addons/mappa";

function setup() {
    //import image of map

}

function getEarthquakes(map){
   //get dimmensions of  map

    var listsOfEarthquakes = get2DArray(100);

    //pull all earthquakes from database
   //itterate through earthquakes and place them in lists
    var anEarthquake = {lon: 0, lat: 0, magnitude: 0};
        //get one earthquake
        //convert cordinates to flat earth model


    console.log(source + "This is the source");

        //convert this to pixels on map
        //place earthquake in appropriate group
        //var correct element = getInnerArray(lon, lat);

    return listsOfEarthquakes;

}

function getInnerArray(lon, lat, map){

    width = map.options.width / 10;
    height = map.options.height /10;


    var firstDigit = lon/width * 10
    var secondDigit = lat/height

    //var placeInArray = firstDigit + secondDigit

    //return placeInArray;
}

function draw(){

    //get image of map
    var map = mappa.StaticMap();
    var listOfEarthquakes = getEarthquakes(map);



}

function get2DArray(size){

    size = size > 0 ? size :0;

    var arr = [];

    while(size--){
        arr.push([]);
    }

    return arr;
}
