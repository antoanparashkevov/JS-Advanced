function sum3(a){
    return (b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}
console.log(sum3(5)(10)(15));