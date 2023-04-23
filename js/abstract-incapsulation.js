// Абстракция и инкапсуляция

class Film {
	#name;
	#author;
	rate;
	#lenght;

	constructor(name, author, lenght) {
		this.#name = name;
		this.#author = author;
		this.#lenght = lenght;
	}

	get name() {
		return this.#name;
	}
	get author() {
		return this.#author;
	}
	get lenght() {
		return this.#lenght;
	}
}

const film = new Film("Avatar", "Cameron", 240).name;
console.log(film);
