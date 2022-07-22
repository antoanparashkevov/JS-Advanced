class Circle{
    constructor(radius){
        this.radius = radius;
        this.diameter = radius *  2
    }

    getDiameter(){
        return this.radius*2
    }

    setDiameter(value){
        this.radius = value/2
    }
}

const circle = new Circle(5)
console.log(circle.diameter)
circle.radius = 6;

//we don't change the diameter when we change the radius because his value was recorded when we created the property
console.log(circle.diameter)

//when we create a method to return a radius multiply by 2, it will display the current value because we take it from the moment when we read the value
console.log(circle.getDiameter())

//now, we change the value
circle.setDiameter(8)
console.log(circle.radius)

class Circle2{
    constructor(radius){
        this.radius = radius;
        this.diameter = radius *  2
    }

    get diameter(){
        return this.radius*2
    }

    set diameter(value){
        this.radius = value/2
    }
}
const circle2 = new Circle2(5)
console.log(circle2.diameter)
circle2.diameter = 6
console.log(circle2)
