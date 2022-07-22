function sum(n){
    //'n' is our variable for storing sum
    const inner = function (a){
        n+=a
        return inner
    }
    //we override the .toString method
    inner.toString = function(){
        return n;
    }
    return inner

}

console.log(sum(1)(6)(-3).toString())//print the current function
