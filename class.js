'use strict';

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(x, y) {
        this.x += x
        this.y += y
    }

    toString() {
        return `[${this.x}, ${this.y}]`;
    }

    static from(obj) {
        const {x, y} = obj;
        return new Point(x, y)
    }
}

const p1 = new Point(10, 20)
p1.move(-5, 10)

console.log(p1)
console.log(p1.toString())
console.log(p1 + '')