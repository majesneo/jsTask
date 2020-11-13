'use strict';

class Rect {
    toString() {
        return `[${this.x},${this.y},${this.width},${this.height}]`
    }
}

const p1 = {x: 10, y: 20, width: 50, height: 50}//созданный обьект без протатипа и класса можно вязать
Object.setPrototypeOf(p1, Rect.prototype)//связываем обьект который не сзвязан с классом и прототипом и свзяываем с прототипом Rect
// p1.__proto__=Rect.prototype//тоже самое
console.log(p1.toString())//при вызове метода ту стринг у p1 и если у нас есть __proto__ то смотрит на какое поле этот прототип ссылается тоесть пройдется поцепочке прототипов в поиске этого метода