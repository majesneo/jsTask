'use strict';


//прототипный подоход позволяет методы присваевать внутри конструктора, так можно менять то один метод то другой в зависимости от переданных значений в конструктор

function Rect(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.toString = function () {
        return `[${this.x},${this.y},${this.width},${this.height}]`
    }
}

const p1 = new Rect(10, 20, 50, 50)
console.log(p1.toString())