"use strict";
const d = "d";
const boomTimer = setTimeout((mess, mess2) => {
    console.log(mess)
    console.log(mess2)
}, 2000, "bash", "dddd");

clearTimeout(boomTimer)

const inter = setInterval(() => {
console.log(new Date())
}, 1000)

clearInterval(inter)