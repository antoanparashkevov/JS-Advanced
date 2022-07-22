class Button{
    constructor(label) {
        this.label = label
    }
    click(){
       return `This ${this.label} is clicked!`
    }
}
class FancyButton extends Button{
    constructor(label,color) {
        super(label);
        this.color = color
    }
    click(){
       console.log(super.click() + '. ' + this.glow())
    }
    glow(){
       return `This ${this.label} glows in ${this.color}`
    }
}

const btn = new FancyButton('Greet', 'red')
btn.click()
// console.log(btn.glow())
console.log(btn)
//
// class Button{
//     constructor(label) {
//         this.label = label
//     }
//     click(){
//         console.log(`This ${this.label} is clicked!`)
//     }
// }
// class FancyButton extends Button{
//     constructor(label,color) {
//         super(label);
//         this.color = color
//     }
//     glow(){
//         console.log(`This ${this.label} glows in ${this.color}`)
//     }
// }
//
// const btn = new FancyButton('Greet', 'red')
// btn.click()
// btn.glow()
// console.log(btn)
