class Book {
  constructor(isbn, title, author, genre, publisher, price) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.publisher = publisher;
    this.price = price;
    this.discount = 0.0;
  }
  // Override default toString method
  toString() {
    return (
      "Book(" +
      this.isbn +
      "," +
      this.title +
      this.author +
      "," +
      this.genre +
      "," +
      this.publisher +
      "," +
      this.price +
      "," +
      this.discount +
      "," +
      ")"
    );
  }

  setSaleDiscount(discount) {
    this.discount = discount;
  }
  calculateSalePrice() {
    let discountAmount = this.price * this.discount;
    return this.price - discountAmount;
  }
}

class Author {
  constructor(firstname, surname) {
    this.firstname = firstname;
    this.surname = surname;
  }
  // Override default toString method
  toString() {
    return "Author(" + this.firstname + "," + this.surname + ")";
  }
}

class Publisher {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  // Override default toString method
  toString() {
    return "Publisher(" + this.name + "," + this.address + ")";
  }
}

console.log("Welcome to the Bookshop");

let author = new Author("Pete", "Smith");
let publisher = new Publisher("Tech Books Publishing Ltd.", "10 High Street");
let book = new Book(1, "Go Unleashed", author, "Technical", publisher, 15.99);

console.log(book);
console.log(`${book}`);

console.log("Calculating the Sales Discount price");
book.setSaleDiscount(0.1);
console.log("Sale price of book:", book.calculateSalePrice());
