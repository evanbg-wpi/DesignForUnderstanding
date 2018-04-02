import {CSV} from "./CSV.js";
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
        let data = csv.JSON('magnitude', magnitude);
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
export {Data};