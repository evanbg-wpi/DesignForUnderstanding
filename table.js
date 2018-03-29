// Given the following CSV file called "mammals.csv"
// located in the project's "assets" folder:
//
// id,species,name
// 0,Capra hircus,Goat
// 1,Panthera pardus,Leopard
// 2,Equus zebra,Zebra


import * as p5 from "./p5/p5";

var csv;

function preload() {
    //my table is comma separated value "csv"
    //and has a header specifying the columns labels
    table = loadTable('earthquakes.csv', 'csv', 'header');
    //the file can be remote
    //table = loadTable("http://p5js.org/reference/assets/mammals.csv",
    //                  "csv", "header");
}

function setup() {
    let table = new p5.Table();
    table.addRow(new p5.TableRow;
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