var mapimg;

var clat = 0;
var clon = 0;

// vars for map
var zoom = 1;
var path = "earthquakes.csv";
var earthquakes;

function preload() {
	mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoiYm9iZWFydCIsImEiOiJjamZoZW92OGE1djB0MnFxN3p0bGQ0cnRlIn0.tzmYd9u7d4GCgfhb7U3okA');
	earthquakes = loadTable(path, "csv", "header");
}

function lonToMerc(lon) {
	lon = radians(lon);
	var a = (256/ PI) * pow(2, zoom);
	var b = lon + PI; 
	return a*b;
}

function latToMerc(lat) {
	lat = radians(lat);
	var a = (256/PI) * pow(2, zoom);
	var b = tan(PI/4 + lat/2); 
	var c = PI - log(b);
	return a*c;
}


function setup() {
	print(earthquakes.getColumn("latitude"));

	createCanvas(1024, 512);
	translate(width/2, height/2);
	imageMode(CENTER);
	image(mapimg, 0, 0);

	var cx = lonToMerc(clon);
	var cy = latToMerc(clat);

	for(var r = 0; r < earthquakes.getRowCount(); r++){
		// use reg expressions to split the data
		var lat = earthquakes.getString(r, 6);
		var lon = earthquakes.getString(r, 8);
		var mag = earthquakes.getString(r, 9);


		var x = lonToMerc(lon) - cx;
		var y = latToMerc(lat) - cy;
		mag = pow(mag, 10);
		mag = sqrt(mag);

		var magmax = sqrt(pow(10,10));
		var d = map(mag, 0, magmax, 0, 60)
		fill(255, 0, 255, 200);
		stroke(255, 0, 255);
		ellipse(x, y, d, d);
	}
}