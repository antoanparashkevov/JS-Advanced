class Point{
    constructor(x,y) {
        this.x = x;
        this.y = y
    }
    static distance(point1,point2){
        return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2)
    }
}

const point1 = new Point(1,1)
const point2 = new Point(5,4);

console.log(Point.distance(point1,point2))
