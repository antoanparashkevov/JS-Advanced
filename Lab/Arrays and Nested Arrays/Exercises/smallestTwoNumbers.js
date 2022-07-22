function smallestTwoNumbers(array) {
    array.sort((a, b) => a - b);
    let smallest = array.slice(0, 2)//from 0 to 1 index
    console.log(smallest)
}

smallestTwoNumbers([30, 15, 50, 5])
