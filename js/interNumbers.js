console.log(23000);

const options = {
    style: "currency",
    currency : "RUB"
}
const options2 = {
    style: "currency",
    currency : "USD"
}
const options3 = {
    style: "decimal"
}

console.log(new Intl.NumberFormat("ru-Ru", options).format(23000))
console.log(new Intl.NumberFormat("en-Us", options2).format(23000))
console.log(new Intl.NumberFormat("ru-RU", options3).format(23000)) 