//constructor function
function Button(label) {
    this.label = label;
}

const b1 = new Button('Spaghetti')
// console.log(b1)

Button.prototype.click = function () {
    console.log(this.label + " is clicked!")
}

// console.log(Object.getPrototypeOf(b1))
//or
// console.log(Button.prototype)

//comparing
// console.log(Object.getPrototypeOf(b1) === Button.prototype)


// console.log(Object.getPrototypeOf(Object.getPrototypeOf(b1)))
//or
// console.log(Object.getPrototypeOf(Button.prototype))
//or
// console.log(Button.prototype.__proto__)


//now we will make an inheritance
function FancyButton(label, color) {
    // this.label = label;
    //we will get label property from Button and set it to FancyButton 'this' object
    Button.call(this, label);
    this.color = color;
}

// FancyButton.prototype.glow = function(){
//         console.log('The button glows in ' + this.color)
// }

//We want a FancyButton prototype to be attached to Button Prototype, so to reuse the functionality from
// Button
FancyButton.prototype = Object.create(Button.prototype)//so we delete the previous FancyButton prototype and attach it to the Button Prototype
FancyButton.prototype.constructor = FancyButton

FancyButton.prototype.glow = function () {
    console.log('The button glows in ' + this.color)
}

// console.log(FancyButton.prototype)
const b2 = new FancyButton('Spaghetti','magenta')

b2.glow();
b2.click();
