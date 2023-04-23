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
