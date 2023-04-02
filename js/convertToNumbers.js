"use strict";

console.log(10 === 10.0);  /* true */

console.log(Number("10"));
console.log(+"10");
console.log(parseInt("13", 2))
console.log(parseInt("13 sec", 10)) /* Вытащит число */
console.log(parseInt("sec 13", 10)) /* не Вытащит число */
console.log(parseInt("13.5", 10)) /* Целое число */
console.log(parseFloat("13.5", 10)) /* С плавающей точкой */
console.log(parseFloat("13.5", 10)) /* С плавающей точкой */


console.log(Number.isNaN(Number("10dsf")))
console.log(Number.isFinite(Number("10dsf")))
console.log(Number.isFinite(Number("10"))) /* Крутая штука отбрасывает infinite && nan */