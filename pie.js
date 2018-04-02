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
                let filterColumnNumber = i;
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
        return JSON.stringify(result); //JSON
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
            print(name);
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
// export {Data};

// Assign the specification to a local variable vlSpec.
var vlSpec = {
    "$schema": "https://vega.github.io/schema/vega/v3.json",
    "width": 200,
    "height": 200,
    "autosize": "none",

    "signals": [
        {
            "name": "startAngle", "value": 0,
            "bind": {"input": "range", "min": 0, "max": 6.29, "step": 0.01}
        },
        {
            "name": "endAngle", "value": 6.29,
            "bind": {"input": "range", "min": 0, "max": 6.29, "step": 0.01}
        },
        {
            "name": "padAngle", "value": 0,
            "bind": {"input": "range", "min": 0, "max": 0.1}
        },
        {
            "name": "innerRadius", "value": 0,
            "bind": {"input": "range", "min": 0, "max": 90, "step": 1}
        },
        {
            "name": "cornerRadius", "value": 0,
            "bind": {"input": "range", "min": 0, "max": 10, "step": 0.5}
        },
        {
            "name": "sort", "value": false,
            "bind": {"input": "checkbox"}
        }
    ],

    "data": [
        {
            "name": "table",
            // "values": [
            //     {"id": 1, "field": 4},
            //     {"id": 2, "field": 20},
            //     {"id": 3, "field": 20},
            //     {"id": 4, "field": 3},
            //     {"id": 5, "field": 7},
            //     {"id": 6, "field": 8}
            // ],
            "transform": [
                {
                    "type": "pie",
                    "field": "field",
                    "startAngle": {"signal": "startAngle"},
                    "endAngle": {"signal": "endAngle"},
                    "sort": {"signal": "sort"}
                }
            ]
        }
    ],

    "scales": [
        {
            "name": "color",
            "type": "ordinal",
            "range": {"scheme": "category20"}
        }
    ],

    "marks": [
        {
            "type": "arc",
            "from": {"data": "table"},
            "encode": {
                "enter": {
                    "fill": {"scale": "color", "magnitude": "name"},
                    "x": {"signal": "width / 2"},
                    "y": {"signal": "height / 2"}
                },
                "update": {
                    "startAngle": {"field": "startAngle"},
                    "endAngle": {"field": "endAngle"},
                    "padAngle": {"signal": "padAngle"},
                    "innerRadius": {"signal": "innerRadius"},
                    "outerRadius": {"signal": "width / 2"},
                    "cornerRadius": {"signal": "cornerRadius"}
                }
            }
        }
    ],

    "legends": [
        {
            "fill": "scale_color",
            "title": "Web Browser",
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

vlSpec["data"][0]["values"] = new Data("earthquakes.csv").countMagnitude(3);
// Embed the visualization in the container with id `vis`
vegaEmbed("#vis", vlSpec);