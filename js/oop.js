"use strict";


const User = function (email, password) {
 this.email = email;
 this.password = password;
}

const vasya = new User("a@a.ru", "123")

// console.log(vasya)
// console.log(vasya instanceof User)


const Book = function(title, author) {
    this.title = title;
    this.auhtor  = author;
    this.isRead = false;
}


Book.prototype.read = function() {
    this.isRead = true;
}

const lordOfTheRings = new Book("Братство кольца","Толкиен");
lordOfTheRings.read()

console.log(lordOfTheRings)