function solve(){
    const array= [1,2,3,4,5]

    const [a,b,...rest] = array//with spread operator and rest operator
    //with spread operator, we will take the values from the array into our 'a' and 'b' variables,
    //with rest operator, we will make a copy to our array
    //with spread operator we do the opposite. We take the array and put it into the variables,
    //with rest operator, we take variables and put it into the array
    console.log(a,b)
    console.log(rest)

    const array1 = [1,2,3,4,5]
    const [...rest1] = array1
    console.log(array1)
    console.log('===')
    console.log(rest1)
    console.log(array1===rest1)
    //because the array is a reference type of data, and we copy only the values, not the address from memory
}
solve()
