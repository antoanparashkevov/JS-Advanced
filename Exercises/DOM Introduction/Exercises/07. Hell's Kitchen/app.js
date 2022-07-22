function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        //   TODO:
        let textArray = document.querySelector('#inputs textarea').value
        //because our input into the text area will be an array, this will return a string array,not a real array
        //"["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]"
        //we will parse the String into the Array
        // console.log(textArray)
        // console.log(typeof textArray)
        textArray = JSON.parse(textArray);
        //JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
        // console.log(typeof textArray)
        // console.log(textArray)

        //["PizzaHut - Peter 500, George 300, Mark 800",
        // "TheLake - Bob 1300, Joe 780, Jane 660"]
        let resultOutput = {}
        for (let arrayElement of textArray) {
            let restaurantName = arrayElement.split(' - ')[0]
            let workersData = arrayElement.split(' - ')[1].split(', ')
            // console.log(restaurantName)
            // console.log(workersData)
            for (let worker of workersData) {
                let [name, salary] = worker.split(' ')
                // console.log(name,salary)
                if (!resultOutput.hasOwnProperty(restaurantName)) {
                    resultOutput[restaurantName] = {}
                } //not sure that we must have else here
                if (restaurantName.hasOwnProperty(restaurantName)) {
                    resultOutput[restaurantName][name] = Number(salary)
                }

            }
        }
        // console.log(resultOutput)
        let entries = Object.entries(resultOutput)
        // console.log(entries)
        //0: Array(2)
        // 0: "Mikes"
        // 1: {Steve: 1000, Ivan: 200, Paul: 800}
        // length: 2

        // 1: Array(2)
        // 0: "Fleet"
        // 1: {Maria: 850, Janet: 650}
        // length: 2

        // length: 2

        let totalSalary = 0;
        let avgSalary = 0;
        let curAvgSalary = 0;
        let bestNameOfRestaurant = ''

        for (let [nameOfRestaurant, workersDataObject] of entries) {
            // console.log(workersDataObject);
            // console.log(Object.entries(workersDataObject))
            //0: (2) ['Steve', 1000]
            // 1: (2) ['Ivan', 200]
            // 2: (2) ['Paul', 800]
            // length: 3

            for ([nameOfWorker, salaryPerWorker] of Object.entries(workersDataObject)) {
                // console.log(nameOfWorker)
                // console.log(salaryPerWorker)
                totalSalary += salaryPerWorker
            }
            avgSalary = totalSalary / Object.entries(workersDataObject).length;
            if (avgSalary > curAvgSalary) {
                curAvgSalary = avgSalary;
                bestNameOfRestaurant = nameOfRestaurant;
                totalSalary = 0;//because we go to the next restaurant
            }
        }
        let printBestWorkers = ''
        let result = Object.entries(resultOutput[bestNameOfRestaurant]).sort((a, b) => b[1] - a[1])
        // console.log(result)
        //from object to an array of arrays
        //[ ['Maria', 850], ['Janet', 650] ]
        //length: 2
        //an array of array and each array represents the name of the worker on the zero index and his salary on the first index
        result.forEach(array => printBestWorkers += `Name: ${array[0]} With Salary: ${array[1]}`)


        //for outputting the best restaurant in this format
        //     `Name: {restaurant name} Average Salary: {restaurant avgSalary} Best Salary: {restaurant bestSalary}`
        document.querySelector('#bestRestaurant p').textContent = `Name: ${bestNameOfRestaurant} Average Salary: ${curAvgSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`


        //for outputting the best restaurant and all of his workers
        document.querySelector('#workers p').textContent = printBestWorkers;
    }

}
