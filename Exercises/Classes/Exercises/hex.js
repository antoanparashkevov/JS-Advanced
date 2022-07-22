class Hex {
    constructor(value) {
       this.number = value;

    }
    valueOf(){
        // return this.value in hex class
        return this.number
    }
    toString(){
        return `0x${this.number.toString(16).toUpperCase()}`
        //starting with 0x, next its hexadecimal value
    }
    plus({number}){
        //add num or Hex obj and return a new obj
        return new Hex(this.number + number)
    }
    minus({number}){
        //subtract num or hex obj anr return a new obj
        return new Hex(this.number - number)
    }
    parse(string){
    //    create a parse class method to parse hexadecimal nums and convert to standard decimal nums
        return parseInt(string,16)
    }
}

let FF = new Hex(255);
console.log(FF.toString());
console.log(FF.valueOf() + 1 === 256);
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b));
console.log(a.minus(b));
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));

