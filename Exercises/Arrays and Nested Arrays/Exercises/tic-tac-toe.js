function solve(array){
    let initialBoard = [[false, false, false],
    [false, false, false],
    [false, false, false]]

   
    for(let turn of array){
        const [firstPl,secondPl] = turn.split(' ').map(Number)
        if(array[firstPl][secondPl]!== false){
            console.log("This place is already taken. Please choose another!")
        }
    }
    
}
solve(
["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
)