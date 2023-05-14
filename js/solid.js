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
///Если мы сделалили частный класс от общего то его можно без болезнено зпменять общий класс на него

class User {
	#role = "user";

	getRole() {
		return this.#role;
	}
}

class Admin extends User {
	#role = ["user", "admin"];
	getRole() {
		return this.#role.join(",");
	}
}

function logRole(user) {
	console.log("Role" + user.getRole().toUpperCase());
}

logRole(new User());
logRole(new Admin());

///Принцип разделения интерфейса

class Weapon {
	cost;
	dealDamage() {}
}

class Rifele extends Weapon {
	strike() {
		return this.dealDamage();
	}
}
class Sword extends Weapon {
	shot() {
		return this.dealDamage();
	}
}

///Принцып инверсии зависимостей - должны зависеть от абстракций а не от каких либо реализаций
///Высокоуровневые модули не должны зависеть от низкоуровненвых модулей

class DB {
	save(items) {
		console.log(`Save : ${items}`);
	}
}

class MongoDB extends DB {
	save(items) {
		console.log(`Save to Mongo : ${items}`);
	}
}

class ToDoList {
	items = [1, 2, 3];
	db;
	constructor(db) {
		this.db = db;
	}

	saveToDb() {
		this.db.save(this.items);
	}
}
