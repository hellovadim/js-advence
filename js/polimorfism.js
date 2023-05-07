// Ad hock - возможность по разному исполнять функцию в зависимости от типа данных

"1" + "2", "=", "12";
//Ппараметрический  полиморфизм - одна и та же функция но с разным типоп аргументов
console.log(1);
console.log("1");

//Полиморфизм подтипов
class Enemy {
	constructor(health) {
		this.health = health;
	}

	recieveDamage(damage) {
		this.health = this.health - damage;
		console.log(this.health);
	}
}

class Ork extends Enemy {
	constructor(health) {
		super(health);
	}
	recieveDamage(damage) {
		if (Math.random() > 0.5) {
			this.health = this.health - damage;
		}
		console.log(this.health);
	}
}

class Troll extends Enemy {}

// Паттерн Builder

const arr = [1, 2, 3];
arr.map((a) => a * 2).filter((b) => b > 3);

// Паттерн билдер
class Wallet {
	balance = 0;

	addSum(sum) {
		this.balance += sum;
		return this;
	}
	remove(sum) {
		this.balance -= sum;
		return this;
	}
}
const wallf = new Wallet(100);
wallf.addSum(90).remove(10);
console.log(wallf.balance);

class House {
	house = {};

	addFloor() {
		this.house.floor = "Floor";
		return this;
	}
	addRoof() {
		this.house.roof = "Roof";
		return this;
	}
	execute() {
		return this.house;
	}
}
const resBuilder = new House().addFloor().addRoof();
console.log(resBuilder);
