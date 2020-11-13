'use strict';

const power = Math.pow //абстракция более выского уровня
const square = x => power(x,2)//наследуем,частный случай power
const cube = x => power(x,3)//понизили уровень абстракции

console.log(power(10,2))
console.log(square(10))


console.log(power(10,3))
console.log(cube(10))
