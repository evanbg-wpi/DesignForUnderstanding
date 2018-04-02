class CSV {
    constructor(csv) {
        this.csv = csv;
    }

    JSON(filterColumn, greaterThan) {

        let lines = this.csv.split("\n");
        let result = [];
        let headers = lines[0].split(",");
        let columnCount = headers.length;

        // function findColumn() {
        //     return element.equals(filterColumn);
        // }

        let filterColumnNumber = -1;
        for(let i = 0; i < columnCount; i++){
            if(headers[i] === filterColumn){
                filterColumnNumber = i;
            }
        }
        for (let i = 1; i < lines.length; i++) {
            let obj = {};
            let currentLine = lines[i].split(",");
            if (filterColumnNumber === -1 || Number(currentLine[filterColumnNumber]) > greaterThan) {
                for (let j = 0; j < columnCount; j++) {
                    obj[headers[j]] = currentLine[j];
                }
                result.push(obj);
            }

        }

        //return result; //JavaScript object
        // return JSON.stringify(result); //JSON
        return result;
    }

}

class Data {
    constructor(file) {
        this.csv = new CSV(file);
    }

    itemInJSON(json, column, value) {
        for (let row in json) {
            if (row[column] === value) {
                return true
            }
        }
        return false
    }

    countMagnitude(magnitude) {
        let data = this.csv.JSON('magnitude', magnitude);
        let pieData = [];
        for (let row in data) {
            let name = row['name'];
            document.write(name);
            if (!(this.itemInJSON(pieData, 'name', name))) {
                let count = 0;
                for (let row in data) {
                    if (row['name'] === name) {
                        count++
                    }
                }
                pieData.push({"name": count})
            }
        }
        return pieData;
    }
}

// Assign the specification to a local variable vlSpec.
var vlSpec = {
    "$schema": "https://vega.github.io/schema/vega/v3.0.json",
    "width": 320,
    "height": 320,
    "data": [
        {	"name": "data_table",
            // "values": new Data("earthquakes.csv").countMagnitude(3),
            "values":[
                {"name":"Alaska","count":"408"},
                {"name":"California","count":"206"},
                {"name":"Puerto Rico","count":"123"},
                {"name":"British Virgin Islands","count":"79"},
                {"name":"Oklahoma","count":"66"},
                {"name":"Indonesia","count":"63"},
                {"name":"Hawaii","count":"60"},
                {"name":"Northern Mariana Islands","count":"53"},
                {"name":"Japan","count":"40"},
                {"name":"Chile","count":"35"},
                {"name":"New Caledonia","count":"32"},
                {"name":"Dominican Republic","count":"30"},
                {"name":"Papua New Guinea","count":"28"},
                {"name":"U.S. Virgin Islands","count":"27"},
                {"name":"Russia","count":"27"},
                {"name":"Mexico","count":"25"},
                {"name":"South Georgia and the South Sandwich Islands","count":"20"},
                {"name":"New Zealand","count":"19"},
                {"name":"Philippines","count":"18"},
                {"name":"Fiji","count":"17"},
                {"name":"South of the Fiji Islands","count":"17"},
                {"name":"South Georgia Island region","count":"16"},
                {"name":"Peru","count":"14"},
                {"name":"Tonga","count":"14"},
                {"name":"Kansas","count":"14"},
                {"name":"China","count":"14"},
                {"name":"Italy","count":"14"},
                {"name":"Canada","count":"13"},
                {"name":"Nevada","count":"13"},
                {"name":"Tajikistan","count":"12"},
                {"name":"Argentina","count":"11"},
                {"name":"Afghanistan","count":"10"},
                {"name":"Washington","count":"10"},
                {"name":"Solomon Islands","count":"10"},
                {"name":"Kyrgyzstan","count":"9"},
                {"name":"Southwest Indian Ridge","count":"9"},
                {"name":"Vanuatu","count":"9"},
                {"name":"Oregon","count":"7"},
                {"name":"Guatemala","count":"6"},
                {"name":"Tennessee","count":"6"},
                {"name":"South Indian Ocean","count":"5"},
                {"name":"Colorado","count":"5"},
                {"name":"Burma","count":"4"},
                {"name":"Montana","count":"4"},
                {"name":"South Sandwich Islands","count":"4"},
                {"name":"Idaho","count":"4"},
                {"name":"Nicaragua","count":"4"},
                {"name":"Costa Rica","count":"4"},
                {"name":"Other","count":"107"},

            ],
            // "values": [
            //     {"name": "Alaska", "browserMajorVer": "34", "count": 408},
            //     {"name": "California", "browserMajorVer": "44", "count": 30},
            //     {"name": "Chrome Mobile", "browserMajorMajorVer": "38", "count": 5},
            //     {"name": "Mobile Safari", "browserMajorVer": "7", "count": 5},
            //     {"name": "Mobile Safari", "browserMajorVer": "8", "count": 5},
            //     {"name": "Mobile Safari",	"browserMajorVer": "9", "count": 10},
            //     {"name": "IE", "browserMajorVer": "10", "count": 10},
            //     {"name": "IE", "browserMajorVer": "11", "count": 15},
            //     {"name": "Other", "browserMajorVer": "", "count": 5}
            // ],

        },

        {	"name": "data_table_pie_inner",
            "source": "data_table",
            "transform": [
                {	"type": "aggregate",
                    "groupby": ["name"],
                    "fields": ["count"],
                    "ops": ["sum"],
                    "as": ["ff_sum_count"]
                },
                {	"type": "pie",
                    "field": "ff_sum_count",
                    "as": ["ff_inner_startAngle", "ff_inner_endAngle"]
                }
            ]
        },

    ],

    "scales": [
        {	"name": "scale_color",
            "type": "ordinal",
            "range": {"scheme": "category10"},
            "domain": {"data": "data_table", "field": "name"}
        }
    ],

    "marks": [

        {	"name": "mark_inner_ring",
            "type": "arc",
            "from": {"data": "data_table_pie_inner"},
            "encode": {
                "enter": {
                    "x": {"signal": "width / 2"},
                    "y": {"signal": "height / 2"},

                    "fill": {"scale": "scale_color",  "field": "name"},
                    "fillOpacity": {"value": 0.8},
                    "stroke": {"value": "white"},

                    "startAngle": {"field": "ff_inner_startAngle"},
                    "endAngle": {"field": "ff_inner_endAngle"},
                    "innerRadius": {"value": 0},
                    "outerRadius": {"value": 100},

                    "tooltip": {"signal": "datum['name'] + ': ' + datum['ff_sum_count'] + '%'"}
                }


            }
        },


    ],

    "legends": [
        {
            "fill": "scale_color",
            "title": "Location",
            "orient": "right",
            "encode": {
                "symbols": {
                    "enter": {
                        "fillOpacity": {"value": 0.5}
                    }
                },
                "labels": {
                    "update": {
                        "text": {"field": "value"}
                    }
                }
            }
        }
    ]
};

// Embed the visualization in the container with id `vis`
vegaEmbed("#vis", vlSpec);