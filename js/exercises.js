// // Упражнение Необходимо поменять местами ключи и значения в map

// // Моё решение
// const wetherMap3 = new Map([
// 	["London", 10],
// 	["Moscow", 7],
// 	["Paris", 14],
// ]);

// const arr = [...wetherMap3];

// let newArr = [];
// for (const arrItem of arr) {
// 	newArr.push(arrItem.reverse());
// }
// const newMapArr = new Map(newArr);
// // console.log(newMapArr)

// // Решение Антона

// const wetherMap4 = new Map([
// 	["London", 10],
// 	["Moscow", 7],
// 	["Paris", 14],
// ]);
// const wetherMap5 = new Map([...wetherMap4].map((el) => el.reverse()));
// // console.log(wetherMap5)

// /*
// Написать функцию которую принимает min max и возвращаеь случайное число между ними
// */

// const minNum = 5;
// const maxNum = 20;

// function randomNumber(min, max) {
// 	console.log(Math.floor(Math.random() * (max - min + 1) + min));
// }
// randomNumber(minNum, maxNum);

// // Конвертация валют

// function convert(sum, initialurrency, convertCurrency) {
// 	const allCurrencies = [
// 		{ name: "USD", mult: 1 },
// 		{ name: "RUB", mult: 1 / 60 },
// 		{ name: "EUR", mult: 1.1 },
// 	];
// 	if (!initial) {
// 		return null;
// 	}
// 	if (!convert) {
// 		return null;
// 	}
// 	const initial = allCurrencies.find((c) => c.name === initialurrency);
// 	const convert = allCurrencies.find((c) => c.name === convertCurrency);
// 	return new Intl.NumberFormat("en-US", {
// 		style: "currency",
// 		currency: convert.num,
// 	}).format((sum * initial.mult) / convert.mult);
// }

// console.log(10000, "TG", "USD");

// // Проверка дня рождения

// function isBirthday(user) {
// 	const birthday = new Date(user.birthday);
// 	const now = new Date();

// 	if (birthday.getMonth() !== now.getMonth()) {
// 		return false;
// 	}
// 	if (birthday.getDay() !== now.getMonth()) {
// 		return false;
// 	}
// 	return true;
// }

// function pizzaTimer(ms) {
// 	const end = new Date().getTime() + ms;
// 	const interval = setInterval(() => {
// 		console.log(
// 			new Intl.DateTimeFormat("ru-RU", {
// 				minute: "numeric",
// 				second: "numeric",
// 			}).format(end + 100 - new Date())
// 		);
// 	}, 1000);
// 	setTimeout(() => {
// 		clearInterval(interval);
// 	}, ms);
// }
// pizzaTimer(5000);
// // setInterval(() => {
// //     console.log()
// // }, 1000);

// const product = { id: 1, name: "Bread", count: 1 };

// const Cart = function () {
// 	this.products = [];
// 	this.counts = 0;
// };

// Cart.prototype.addToCart = function (product) {
// 	if (this.products.find((item) => item.id === product.id)) {
// 		this.counts = this.counts + 1;
// 	} else {
// 		this.products.push(product);
// 	}
// };

// //Класс пользователя

// class UserConf {
// 	#login;
// 	#_password;
// 	constructor(login, password) {
// 		this.#login = login;
// 	}
// 	set #password(pass) {
// 		this.#_password = pass.split("").reverse().join("");
// 	}

// 	get #password() {
// 		return this.#password.spli("").reverse().join("");
// 	}

// 	get login() {
// 		return this.#login;
// 	}

// 	checkPassword(pass) {
// 		return this.#password === pass;
// 	}

// 	changePassword(oldPass, newPass) {
// 		if (this.changePassword(oldPass)) {
// 			return false;
// 		} else {
// 			this.#password = newPass;
// 		}
// 	}
// }

// // сделать класс врага со здоровьем и методом получения урона
// // Сделать класс меча который имеет силу
// // Сделать класс орка который в 50% случаев не получает урон

// class Enemy {
// 	constructor(health) {
// 		this.health = health;
// 	}

// 	recieveDamage(damage) {
// 		this.health = this.health - damage;
// 		console.log(this.health);
// 	}
// }
// class Sword {
// 	#damage;
// 	constructor(damage) {
// 		this.#damage = damage;
// 	}
// 	strike(enemy) {
// 		enemy.recieveDamage(this.#damage);
// 	}
// }

// class Ork extends Enemy {
// 	constructor(health) {
// 		super(health);
// 	}
// 	recieveDamage(damage) {
// 		if (Math.random() > 0.5) {
// 			this.health = this.health - damage;
// 		}
// 		console.log(this.health);
// 	}
// }
// const enemy = new Enemy(10);
// const ork = new Ork(10);
// const sword = new Sword(3);
// sword.strike(enemy);

//Отобразить select

const root = document.getElementById("root");
// fetch("https://dummyjson.com/products/categories")
// 	.then((res) => res.json())
// 	.then((data) => {
// 		const select = document.createElement("select");
// 		data.map((item) => {
// 			let option = document.createElement("option");
// 			option.setAttribute("value", item);
// 			option.textContent = item;
// 			select.appendChild(option);
// 		});
// 		root.appendChild(select);
// 	});

// function createSelect(array) {
// 	root.innerHTML = `
// 	<select>
// 		${array.map((el) => `<option value=${el}>${el}</option>`)}
// 	</select>
// 	`;
// }
// fetch("https://dummyjson.com/products/categories")
// 	.then((res) => res.json())
// 	.then((data) => {
// 		createSelect(data);
// 	});

// My Fetch

function myFetch(url) {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();
		request.open("GET", url);
		request.send();
		request.addEventListener("load", function () {
			resolve(this.responseText);
		});
		request.addEventListener("error", function () {
			reject(this.statusText);
		});
		request.addEventListener("timeout", function () {
			reject(new Error("timeout"));
		});
	});
}

myFetch("https://jsonplaceholder.typicode.com/todos/")
	.then((data) => console.log(data))
	.catch((err) => console.log(err));
