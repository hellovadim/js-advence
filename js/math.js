"use strict"

console.log(Math.sqrt(36)) /* Квадратный корень */
console.log(Math.cbrt(36)) /* Кубический корень */
console.log(16 ** (1/4)) /* корень */


console.log(Math.sign(-100)) /* знак числа модулю */
console.log(Math.abs(-9)) /* Абсолютное число по модулю */
console.log(Math.exp(-9)) /* exponent */



console.log(Math.max(10, 67, 8, -4, 7)) /*max */
console.log(Math.min(10, 67, 8, -4, 7)) /*min */

const arr = [1, 2, 10, 0, 19];
console.log(Math.max(...arr))

console.log(Math.random())

console.log(Math.round(1.3)) /* до ближайшего целого */
console.log(Math.ceil(1.3)) /* до потолка */
console.log(Math.floor(1.3)) /* обратное решение ceil*/
console.log(Math.trunc(1.3)) /* целочисленное число*/
console.log((1.356748).toFixed(2))  /* Округление до нужного числа возвращает строку */  
