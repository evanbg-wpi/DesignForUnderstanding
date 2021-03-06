class CSV {
    constructor(csv) {
        this.csv = csv;
    }

    JSON(filterColumn, greaterThan) {

        let lines = csv.split("\n");
        let result = [];
        let headers = lines[0].split(",");
        let columnCount = headers.length;

        function findColumn() {
            return element.equals(filterColumn);
        }

        let filterColumnNumber = headers.findIndex(findColumn);

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
export {CSV};
