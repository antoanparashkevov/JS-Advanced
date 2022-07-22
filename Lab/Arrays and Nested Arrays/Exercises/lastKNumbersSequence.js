function lastKNumbersSequence(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        result.push(sumEachElement(result, k))
    }

    function sumEachElement(array, k) {//we take the array, we take the step
        k = array.length > k ? k : array.length;
        //the step is the length of the array if the current value
        //of the step is below the array length, otherwise, we take the current value of the step.
        let sum = 0;
        for (let i = 1; i <= k; i++) {//three iterations
            sum += array[array.length - i]
            //1->the length is 1, the 'i' is one, then sum = array[0]
            //2->the length is 2, the 'i' is two, then sum = array[0]
            //3->the length is 3, the 'i' is three, then sum = array[0]
        }
        return sum;
    }

    return result

}

console.log(lastKNumbersSequence(6, 3))
