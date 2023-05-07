//Приинцип единой ответственности

class Charcter {
	#inventar = [];
	#health = 10;

	pickItem(item) {
		this.#inventar.push(item);
	}

	reciveDamage(damage) {
		this.#health -= damage;
	}
	// svaeCharacter() {
	// 	localStorage.setItem("char", this);
	// }
	// loadCharacter() {
	// 	////.....
	// }
}

class Db {
	saveCharacter(item) {
		localStorage.setItem("char", item);
	}
	loadCharacter() {
		////.....
	}
}

//Принцип открытости и закрытости
///Класс должен быть открыт к дополнениям но закрыт к модификации

class Treasure {
	value = 0;
}
class Coin extends Treasure {
	value = 1;
}
class Crystal extends Treasure {
	value = 10;
}
class Brilliant extends Treasure {
	value = 100;
}

class Inventary {
	#score;

	pick(treasure) {
		this.#score += treasure.value;
	}
}

///Принцип Барбары Лисков

class User {
	role = "user";

	getRole() {
		return this.role;
	}
}
