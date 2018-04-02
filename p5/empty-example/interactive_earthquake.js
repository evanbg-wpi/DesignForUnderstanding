
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

    var LOE = {};


    //pull all earthquakes from database

    let result = [];

    let obj = {};

    for (let i = 1; i < csv.getRowCount(); i++) {

        tempLat = Number(csv.getString(i, 'latitude'));
        tempLon = Number(csv.getString(i, 'longitude'));

        const pos = myMap.latLngToPixel(tempLat, tempLon);

        //let groupNum = getInnerArray(pos.x, pos.y);
        obj = {lat: pos.x, lng: pos.y, mag: Number(csv.getString(i, 'magnitude'))};

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
    clear();
    //get image of map
    var LOE = getData();

    var LOE2 = getEarthquakes();


    for( var i = 0; i < LOE.length; i++){

        const pos = myMap.latLngToPixel(LOE[i].lat, LOE[i].lng);
        ellipse(pos.x, pos.y, LOE[i].mag*myMap.zoom(), LOE[i].mag*myMap.zoom());
    }

    function  getData() {
        var LOE = [];

        var e1 = {lat: 37.67230, lng: -121.619, mag: 1.43};
        LOE.push(e1);
        var e2 = {lat: 21.5146, lng: 94.5721, mag: 4.9};
        LOE.push(e2);
        var e3 = {lat: 37.5765, lng: -118.8591, mag: .06};
        LOE.push(e3);
        var e4 = {lat: 61.2963, lng: -152.46, mag: 1.8};
        LOE.push(e4);
        var e5 = {lat: 19.4235, lng: -155.609, mag: 1};
        LOE.push(e5);
        var e6 = {lat: 61.3019, lng: -152.450, mag: 2};
        LOE.push(e6);
        var e7 = {lat: 35.503, lng: -118.405, mag: 1.2};
        LOE.push(e7);
        var e8 = {lat: 37.673, lng: -121.6133, mag: 1.67};
        LOE.push(e8);
        var e9 = {lat: 18.072, lng: -66.9848, mag: 1.6};
        LOE.push(e9);
        var e10 = {lat: 51.371, lng: 178.724, mag: 2.1};
        LOE.push(e10);
        var e11 = {lat: 38.776, lng: -122.7245, mag: 1.22};
        LOE.push(e11);
        var e12 = {lat: 19.407, lng: -155.284, mag: 1.47};
        LOE.push(e12);
        var e13 = {lat: 62.5408, lng: 149.859, mag: 1.2};
        LOE.push(e13);
        var e14 = {lat: 59.1835,lng: -152.5865, mag: 1.6};
        LOE.push(e14);
        var e15 = {lat: 38.834, lng: -122.802, mag: 1.4};
        LOE.push(e15);
        var e16 = {lat: 35.978, lng: -117.853, mag: 1.13};
        LOE.push(e16);
        var e17 = {lat: -24.286, lng: -67.8647, mag: 5.6};
        LOE.push(e17);
        var e18 = {lat: -24.286, lng: -67.864, mag: 3.6};
        LOE.push(e18);
        var e19 = {lat: 61.1163, lng: -147.235, mag: 1.2};
        LOE.push(e19);
        var e20 = {lat: 63.0332, lng: -151.4388, mag: 2.3};
        LOE.push(e20);
        var e21 = {lat: 36.49, lng: -113.992, mag: 1.1};
        LOE.push(e21);
        var e22 = {lat: 60.444, lng: -151.869, mag: 1.5};
        LOE.push(e22);
        var e23 = {lat: 53.302, lng: -163.504, mag: 2.5};
        LOE.push(e23);
        var e24 = {lat: 61.1521, lng: -151.3632, mag: 1.3};
        LOE.push(e24);
        var e25 = {lat: 62.1521, lng: -150.1588, mag: 2};
        LOE.push(e25);
        var e26 = {lat: 38.778, lng: -122.7505, mag: 1.75};
        LOE.push(e26);
        var e27 = {lat: 19.3997, lng: -64.2795, mag: 2.7};
        LOE.push(e27);
        var e28 = {lat: 18.062, lng: -99.5327, mag: 1.8};
        LOE.push(e28);
        var e29 = {lat: 18.789, lng: -154.867, mag: 1.83};
        LOE.push(e29);
        var e30 = {lat: 54.9592,lng: -159.629, mag: 2.6};
        LOE.push(e30);
        var e31 = {lat: 61.2406, lng: -150.509, mag: 1.3};
        LOE.push(e31);
        var e32 = {lat: 32.905, lng: -115.532, mag: 1.6};
        LOE.push(e32);
        var e33 = {lat: 61.117, lng: -150.911, mag: 2.3};
        LOE.push(e33);
        var e34 = {lat: 54.7822, lng: -162.2961, mag: 2.1};
        LOE.push(e34);
        var e35 = {lat: 61.4464, lng: -151.7569, mag: 1.1};
        LOE.push(e35);
        var e36 = {lat: -3.7122, lng: 131.5537, mag: 4.9};
        LOE.push(e36);
        var e37 = {lat: 19.4235, lng: -155.609, mag: 1};
        LOE.push(e37);
        var e38 = {lat: 68.5121, lng: -146.7507, mag: 1};
        LOE.push(e38);
        var e39 = {lat: 1.3512, lng: 124.434, mag: 4.2};
        LOE.push(e39);
        var e40 = {lat: 36.7, lng: -121.338, mag: 1.84};
        LOE.push(e40);
        var e41 = {lat: 61.6271, lng: -151.8501, mag: 1.5};
        LOE.push(e41);
        var e42 = {lat: 36.168, lng: -120.1633, mag: 1.75};
        LOE.push(e42);
        var e43 = {lat: 61.458, lng: -122.654, mag: 1.2};
        LOE.push(e43);
        var e44 = {lat: 61.5179, lng: -146.490, mag: 1.1};
        LOE.push(e44);
        var e45 = {lat: 19.403, lng: -155.283, mag: 2.1};
        LOE.push(e45);
        var e46 = {lat: 59.480,lng: -152.662, mag: 1.6};
        LOE.push(e46);
        var e47 = {lat: 58.424, lng: -153.6441, mag: 1.7};
        LOE.push(e47);
        var e48 = {lat: 52.7406, lng: -166.6875, mag: 3.3};
        LOE.push(e48);
        var e49 = {lat: -47.3855, lng: -121.783, mag: 1.3};
        LOE.push(e49);
        var e50 = {lat: -21.771, lng: -113.867, mag: 4.8};
        LOE.push(e50);
        var e51 = {lat: 60.8123, lng: -147.602, mag: 1.3};
        LOE.push(e51);
        var e52 = {lat: 38.8123, lng: -122.8181, mag: 1.02};
        LOE.push(e52);
        var e53 = {lat: 51.132, lng: 178.6078, mag: 1.9};
        LOE.push(e53);
        var e54 = {lat: -23.356, lng: -66.9895, mag: 4};
        LOE.push(e54);
        var e55 = {lat: 52.731, lng: -166.646, mag: 2.3};
        LOE.push(e55);
        var e56 = {lat: 10.9473, lng: 124.6154, mag: 4.9};
        LOE.push(e56);
        var e57 = {lat: 61.4966, lng: -140.6142, mag: 1.1};
        LOE.push(e57);
        var e58 = {lat: 32.921, lng: -116.2398, mag: 1.02};
        LOE.push(e58);
        var e59 = {lat: 19.173, lng: -155.586, mag: 1.99};
        LOE.push(e59);
        var e60 = {lat: 19.173, lng: -161.456, mag: 2.4};
        LOE.push(e60);
        var e61 = {lat: 39.8674, lng: -119.011, mag: 0.8};
        LOE.push(e61);
        var e62 = {lat: 34.0308,lng: -116.770, mag: 1.34};
        LOE.push(e62);
        var e63 = {lat: -4.8676, lng: 153.6709, mag: 4.8};
        LOE.push(e63);
        var e64 = {lat: 33.781, lng: -115.655, mag: 1.03};
        LOE.push(e64);
        var e65 = {lat: 54.120, lng: -161.271, mag: 3.2};
        LOE.push(e65);
        var e66 = {lat: 37.4285, lng: -121.771, mag: 1.22};
        LOE.push(e66);
        var e67 = {lat: 35.9805, lng: 69.1573, mag: 4.5};
        LOE.push(e67);
        var e68 = {lat: 38.6549, lng: -118.7994, mag: 2};
        LOE.push(e68);
        var e69 = {lat: 62.8542, lng: -150.82, mag: 1};
        LOE.push(e69);
        var e70 = {lat: 38.9155, lng: -122.8926, mag: 1.74};
        LOE.push(e70)
        var e71 = {lat: 56.444, lng: -158.966, mag: 2};
        LOE.push(e71);
        var e72 = {lat: 34.018, lng: -116.944, mag: 1.53};
        LOE.push(e72);
        var e73 = {lat: 33.013, lng: -116.3573, mag: 1.82};
        LOE.push(e73);
        var e74 = {lat: -24.172, lng: -67.2739, mag: 4.1};
        LOE.push(e74);
        var e75 = {lat: 61.45, lng: -140.6041, mag: .9};
        LOE.push(e75);
        var e76 = {lat: 41.876, lng: -119.6278, mag: 1.6};
        LOE.push(e76);
        var e77 = {lat: 45.3598, lng: -121.700, mag: 0.52};
        LOE.push(e77);
        var e78 = {lat: -52.133, lng: 27.7175, mag: 4.5};
        LOE.push(e78);
        var e79 = {lat: 36.0255,lng: -117.7645, mag: .61};
        LOE.push(e79);
        var e80 = {lat: 64.628, lng: -147.757, mag: 0.4};
        LOE.push(e80);
        var e81 = {lat: 36.646, lng: -121.261, mag: 2.09};
        LOE.push(e81);
        var e82 = {lat: 38.8293, lng: -122.8135, mag: 1.16};
        LOE.push(e82);
        var e83 = {lat: 55.1608, lng: -159.37, mag: 3.6};
        LOE.push(e83);
        var e84 = {lat: 36.0243, lng: -117.767, mag: .72};
        LOE.push(e84);
        var e85 = {lat: -7.237, lng: -76.2101, mag: 4.3};
        LOE.push(e85);
        var e86 = {lat: -19.353, lng: -177.468, mag: 4.4};
        LOE.push(e86);
        var e87 = {lat: 59.775, lng: -136.57, mag: 1.2};
        LOE.push(e87);
        var e88 = {lat: 36.492, lng: 140.7568, mag: 5.3};
        LOE.push(e88);
        var e89 = {lat: 38.9195, lng: -122.8885, mag: 1.11};
        LOE.push(e89);
        var e90 = {lat: 62.1606, lng: -153.2248, mag: 1.6};
        LOE.push(e90);
        var e91 = {lat: 37.467, lng: -118.8923, mag: 0.65};
        LOE.push(e91);
        var e92 = {lat: 35.8525, lng: -97.2357, mag: 2.6};
        LOE.push(e92);
        var e93 = {lat: 52.755, lng: -166.777, mag: 2.2};
        LOE.push(e93);
        var e94 = {lat: 67.687, lng: -166.791, mag: 3};
        LOE.push(e94);
        var e95 = {lat: 62.9393,lng: -148.306, mag: 1.2};
        LOE.push(e95);
        var e96 = {lat: 52.7361, lng: -168.608, mag: 1.8};
        LOE.push(e96);
        var e97 = {lat: 53.955, lng: -163.618, mag: 2};
        LOE.push(e97);
        var e98 = {lat: 63.5851, lng: -147.395, mag: 1.2};
        LOE.push(e98);
        var e99 = {lat: 63.5873, lng: -151.1715, mag: 0.5};
        LOE.push(e99);
        var e100 = {lat: 30.205, lng: -140.9321, mag: 1.6};
        LOE.push(e100);
        var e101 = {lat: 38.8226, lng: -122.844, mag: 1.56};
        LOE.push(e101);
        var e102 = {lat: 65.0745, lng: -149.725, mag: 1.2};
        LOE.push(e102);
        var e103 = {lat: 33.7266, lng: -115.2119, mag: 2.17};
        LOE.push(e103);
        var e104 = {lat: 63.513, lng: -151.21, mag: 1.7};
        LOE.push(e104);
        var e105 = {lat: 33.5185, lng: -116.519, mag: 0.68};
        LOE.push(e105);
        var e106 = {lat: 59.9464, lng: -152.8283, mag: 1.4};
        LOE.push(e106);
        var e107 = {lat: 64.644, lng: -149.3513, mag: 0.4};
        LOE.push(e107);
        var e108 = {lat: 36.406, lng: -120.207, mag: 2.25};
        LOE.push(e108);
        var e109 = {lat: 46.433, lng: -122.310, mag: 1.33};
        LOE.push(e109);
        var e110 = {lat: 63.6092, lng: -147.503, mag: 0.7};
        LOE.push(e110);
        var e111 = {lat: 35.8519, lng: -97.2366, mag: 2.7};
        LOE.push(e111);
        var e112 = {lat: 33.9369, lng: -116.736, mag: 2.03};
        LOE.push(e112);
        var e113 = {lat: 66.3658, lng: -150.1971, mag: 1.4};
        LOE.push(e113);
        var e114 = {lat: 33.93683, lng: -115.942, mag: 1.28};
        LOE.push(e114);
        var e115 = {lat: 52.7041, lng: -168.575, mag: 1.6};
        LOE.push(e115);
        var e116 = {lat: 18.5439, lng: 145.541, mag: 7.7};
        LOE.push(e116);


        return LOE;

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
