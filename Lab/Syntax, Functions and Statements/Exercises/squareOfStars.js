function squareOfStars(side){
    // for(let i = 0;i<side;i++){
        if(side !==undefined){
            for(let j = 0;j<side;j++){
                console.log('* '.repeat(side))
            }
        }else{
            for(let j = 0;j<5;j++){
                console.log('*'.repeat(5))
            }
        }
    
    // }
}
// squareOfStars(5);
squareOfStars(6);
// squareOfStars(2);