"use strict";

const now = new Date();
console.log(now);

console.log(new Date("01-01-2022"));
console.log(new Date("01/01/2022"));
console.log(new Date("2022/01/01"));

console.log(new Date(2024, 10, 20))
console.log(new Date(2024, 13, 52))
console.log(new Date(2024, 13, 52, 10, 5, 7))
console.log(Date.now())
console.log(now.getFullYear())
console.log(now.getDate())
console.log(now.getMonth())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())
console.log(now.setFullYear(2030))

const date = new Date(2024, 10, 15);
const date2 = new Date(2024, 11, 15);
console.log(Number(date))
console.log(date2 -date)
function getDatesBetweenDates(dateF, dateSec) {
    return (dateSec -dateF ) / (1000 * 60 * 60 * 24)
}
console.log(getDatesBetweenDates(date, date2))

const first = new Date(2024, 10, 4);
const second = new Date(2024, 10, 4);

console.log(first < second);
console.log(first.getTime() === second.getTime());


const dateY = new Date();
const optipns1 = {
    hour : "numeric",
    minute : "numeric",
    month : "long",
    weekday: "long"
}
console.log(new Intl.DateTimeFormat("ru-Ru", optipns1).format(dateY))
console.log(window.navigator.appCodeName)