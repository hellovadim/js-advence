class BookClass {
	isRead = false;
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}

	read() {
		this.isRead = true;
	}
}

const lord = new BookClass("vvvv");

class Car {
	#vin;

	#changeVin() {
		console.log("changed");
	}
	test() {
		this.#changeVin();
	}
	static field = 3;
	static #privetField = 3;
	static d() {
		console.log("d");
	}
}

const car = new Car().test();
Car.d();
