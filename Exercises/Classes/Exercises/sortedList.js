//Functionality
// •	add(element) - adds a new element to the collection
// •	remove(index) - removes the element at position index
// •	get(index) - returns the value of the element at position index
// •	size - number of elements stored in the collection - NOT a Function
class List {
    constructor() {
        this.result = [];
        this.size = this.result.length
    }


    add(element) {
        this.result.push(element)
        this.size = this.result.length
        this.result.sort((a, b) => a - b)
    };
    remove(index){
        if(index >=0 && index <= this.result.length -1){
            this.result.splice(index,1)
            this.size = this.result.length;
            // this.result.sort((a,b)=>a-b);
        }else{
            throw new Error('Invalid Index')
        }
    };
    get(index){
        if(index >=0 && index <= this.result.length -1){
            return this.result[index]
        }else{
            throw new Error('Invalid Index')
        }
    }
}


let list = new List();
console.log(list)
list.add(5);
list.add(4);
list.add(3);
list.remove(1)
console.log(list)
console.log(list.get(0))
