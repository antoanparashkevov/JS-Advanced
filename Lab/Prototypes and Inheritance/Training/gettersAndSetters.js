const obj = {
    name:'Antoan'
}

let lastName = "Parashkevov"
Object.defineProperty(obj,'lastName',{
    get(){return  lastName},
    set(value){
        if(typeof value !=='string'){
            throw  new TypeError('LastName must be a string')
        }
        lastName = value
    },
    enumerable:true,
    configurable:true
})

console.log(obj.lastName)
obj.lastName = 'Dolashki';
console.log(obj.lastName)
console.log(obj)
