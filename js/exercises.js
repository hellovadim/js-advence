// Упражнение Необходимо поменять местами ключи и значения в map


// Моё решение
const wetherMap3 = new Map([
    ["London", 10],
    ["Moscow", 7],
    ["Paris", 14]
])

const arr = [...wetherMap3]

let newArr = []
for (const arrItem of arr) {
    newArr.push(arrItem.reverse())
}
const newMapArr = new Map(newArr)
// console.log(newMapArr)

// Решение Антона

const wetherMap4 = new Map([
    ["London", 10],
    ["Moscow", 7],
    ["Paris", 14]
])
const wetherMap5 = new Map([...wetherMap4].map(el => el.reverse()))
// console.log(wetherMap5)

/* 
Написать функцию которую принимает min max и возвращаеь случайное число между ними
*/


const minNum = 5;
const maxNum = 20;

function randomNumber (min, max) {
    console.log(Math.floor(Math.random() * (max - min + 1) + min)) 
}
randomNumber(minNum , maxNum)


// Конвертация валют

function convert(sum, initialurrency, convertCurrency) {
    const allCurrencies = [
        {name : "USD", mult : 1},
        {name : "RUB", mult: 1/60},
        {name : "EUR", mult: 1.1},
    ];
    if(!initial) {
        return null;
    }
    if(!convert) {
        return null;
    }
    const initial = allCurrencies.find(c => c.name === initialurrency)
    const convert = allCurrencies.find(c => c.name === convertCurrency)
    return new Intl.NumberFormat('en-US', {style: "currency", currency: convert.num}).format(sum * initial.mult / convert.mult)
}


console.log(10000, "TG", "USD")


// Проверка дня рождения

function isBirthday(user) {
    const birthday = new Date(user.birthday)
    const now = new Date();

    if(birthday.getMonth() !== now.getMonth()) {
        return false;
    }
    if(birthday.getDay() !== now.getMonth()) {
        return false
    }
    return true;
}


function pizzaTimer (ms) {
    const end = new Date().getTime() + ms;
    const interval = setInterval(() => {
        console.log(
            new Intl.DateTimeFormat('ru-RU', {
                minute: 'numeric',
                second: 'numeric'
            }).format(end + 100 - new Date())
        )
    }, 1000)
    setTimeout(() => {
        clearInterval(interval)
    }, ms)
}
pizzaTimer(5000)
// setInterval(() => {
//     console.log()
// }, 1000);


const product = {id: 1, name : "Bread", count : 1};

const Cart = function () {
    this.products = []
    this.counts = 0;
}

Cart.prototype.addToCart = function (product) {
    if(this.products.find(item => item.id === product.id)) {
        this.counts = this.counts + 1
    }else {
        this.products.push(product)
    }
}