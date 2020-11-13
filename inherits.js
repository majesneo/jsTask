'use strict';

// const util = require('util')
//
// function Rect(x, y, width, height) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
// }
//
// Rect.prototype.toString = function () {
//     return `[${this.x},${this.y},${this.width},${this.height}]`
// }
//
// function Square(x, y, side) {
//     Rect.call(this, x, y, side, side)
// }
// Object.setPrototypeOf(Square.prototype, Rect.prototype)//кто наследует от кого наследует предпочтительно использовать этот метод
// // util.inherits(Square, Rect)//наследуем метод тустирнг
// // Square.prototype = Object.create(Rect.prototype) // Object.create() создаёт новый объект с указанным прототипом и свойствами.
// // Square.prototype.constructor = Square;
// const p1 = new Square(10,20,50)
// console.log(p1.toString())


// class Rect {
//     constructor(x, y, width, height) {
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;
//     }
//
//     toString() {
//         return `[${this.x},${this.y},${this.width},${this.height}]`
//     }
// }
//
// class Square extends Rect {
//     constructor(x, y, side) {
//         super(x, y, side, side);
//     }
// }

