//Sets это множество или совокупность обьектов
// Тип структуры данных создаёт обьект с уникальными данными убирая одинаковый
"use strict";

const users  = ["Any", "Mary", "Pavel"];


const flights = ["Russia", "USA","London", "London", "USA" ]

const setFlights = new Set(flights)
console.log(setFlights)
console.log(setFlights.size)
console.log(setFlights.has("Russia"))
setFlights.add("Paris")
setFlights.delete("London")
// setFlights.clear()
console.log(setFlights)

for (const flight of setFlights) {
    console.log(flight)
}
console.log([...setFlights])

const setObj = new Set([{a: 1}, {b: 2}, {b: 2}])
// Не будет уникальным так как обьект не примитив
console.log(setObj)

const setSter = new Set("abcdab")
console.log(setSter)