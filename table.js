// Given the following CSV file called "mammals.csv"
// located in the project's "assets" folder:
//
// id,species,name
// 0,Capra hircus,Goat
// 1,Panthera pardus,Leopard
// 2,Equus zebra,Zebra


// import table from "./p5/p5";

var csv;

function preload() {
    csv = loadTable('earthquakes.csv', 'csv', 'header');
}

function setup() {
    let table = new p5.Table();
    table.addRow(new p5.TableRow)(csv.getRow(0));
    //count the columns
    print( + ' total rows in table');
    print(csv.getColumnCount() + ' total columns in table');

    print(csv.getColumn('name'));
    //["Goat", "Leopard", "Zebra"]

    //cycle through the table
    for (var r = 0; r < table.getRowCount(); r++)
        for (var c = 0; c < table.getColumnCount(); c++) {
            print(table.getString(r, c));
        }
}

function draw(){
    ellipse(50,50,80,80);
}