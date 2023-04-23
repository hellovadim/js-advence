// const Book = function (title, author) {
// 	this.title = title;
// 	this.author = author;
// };

// Book.prototype.buy = function () {
// 	console.log("buy");
// };

// const AudioBook = function (title, author, lenMin) {
// 	Book.call(this, title, author);
// 	this.lenMin = lenMin;
// };
// AudioBook.prototype = Object.create(Book.prototype);
// AudioBook.prototype.constructor = AudioBook;
// AudioBook.prototype.log = function () {
// 	console.log(`${this.title} - ${this.lenMin}`);
// };

// const book = new AudioBook("Lord", "Tolkien", 20 * 60);

// book.buy();

class Book {
	constructor(title, author) {
		this.author = author;
		this.title = title;
	}

	buy() {
		console.log("buy");
	}
}

class AudioBook extends Book {
	constructor(lenMin) {
		super(title, author);
		this.lenMin = lenMin;
	}
	log() {
		console.log("log");
	}
}

// const book = new AudioBook("lord", "tolkien", 20 * 60);
// book.buy();

class NowBook {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}
	info() {
		console.log(`${this.author} - ${this.title}`);
	}
}
const book1 = new NowBook("Tolkien", "title");
book1.info();

class EBook extends NowBook {
	constructor(title, author, pages) {
		super(title, author);
		this.pages = pages;
	}
	// Если вызвать такой же метод который наследывается то можно его дополнить
	info() {
		console.log(`${this.author} - ${this.title} ${this.pages}`);
	}
}
const book2 = new EBook("Tolkien", "title", 100);
book2.info();
