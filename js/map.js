// Хранение струтур данных где есть ключ значение для того что бы их искать добавлять удалять

//  Map 
// простой по умолчанию
// любой ключ
// получение size 
// Оптимизирован для частых операций производительность выше
// По умолчанию нет stringify/map

// Object
// имеет prototype ключи
// ключи string Symbol
// Ручной трекинг размера
// не оптимизирован
// есть stringify / parse
"use strict"
// Простая работа с map
const wetherMap = new Map();
wetherMap
    .set("London", "10")
    .set("Moscow", "7")
console.log( wetherMap.get("Moscow"))
console.log( wetherMap.has("Moscow"))
wetherMap.delete("London")
// wetherMap.clear()
wetherMap
    .set(1, "10")
    .set([1,2,3], "10")
    .set({a : 1}, {b: 2})
console.log(wetherMap.get({a: 1}))
console.log(wetherMap.size)
console.log(wetherMap)

// Конвертация в map
const wetherMa = new Map([["London", "10"],["Moscow", "7"]]);
console.log(wetherMa)

const obj = {
    london : 10,
    moscow: 7,
    paris: 14
}

// console.log(Object.entries(obj))
const wetherObj = new Map(Object.entries(obj))
console.log(wetherObj)


// Итерация

const wetherMap2 = new Map([
    ["London", "10"],
    ["Moscow", "7"],
    ["Paris", "14"]
])

for (const [key, value] of wetherMap2) {
    console.log(key)
}

console.log([...wetherMap2])
console.log(wetherMap2.keys())


