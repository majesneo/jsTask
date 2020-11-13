'use strict';

function f1(a, b) {
    console.log('f1(' + a + ',' + b + ')');
}

f1(2, 3)
f1.call(null, 2, 3)

const arr = [2, 3]
f1(...arr)
f1.apply(null, arr)



const arr = [7, 10, 1, 5, 2];
const sum = (acc, val) => ( acc + val)
const res = arr.reduce(sum)
console.log({res})
