"use strict"

// Отличие меньше методов и ключи могут иметь только обьекты
// Хорошо подходят для кэширования
const a = {a : 1}; 
// const map = new WeakMap()
// map.set(a, "test")

// console.log(map)



let cache = new WeakMap();

function getValue (obj) {
    if(!cache.has(obj)) {
        const res = 1;
        cache.set( obj, res);
    }
    return cache.get(obj);
}

const result = getValue(a);
console.log(cache);