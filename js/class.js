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

const lord = new BookClass('vvvv')