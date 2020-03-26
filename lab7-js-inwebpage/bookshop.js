class Product {
  constructor(price) {
    this.price = price;
    this.discount = 0.0;
  }

  setSaleDiscount(discount) {
    this.discount = discount;
  }
  calculateSalePrice() {
    let discountAmount = this.price * this.discount;
    return this.price - discountAmount;
  }
}

class Book extends Product {
  constructor(isbn, title, author, genre, publisher, price) {
    super(price);
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.publisher = publisher;
  }
  // Override default toString method
  toString() {
    return (
      "Book(" +
      this.isbn +
      "," +
      this.title +
      "," +
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

// ------------------------
// Set up data
// ------------------------
let author = new Author("Pete", "Smith");
let publisher = new Publisher("Tech Books Publishing Ltd.", "10 High Street");

let books = [
  new Book(1, "JavaScript Unleashed", author, "Technical", publisher, 15.99),
  new Book(1, "JavaScript Server", author, "Technical", publisher, 12.99),
  new Book(
    1,
    "JavaScript Live",
    new Author("John", "Cooke"),
    "Technical",
    publisher,
    14.49
  )
];

function showBooks() {
  let listItem = document.querySelector("ul");

  var range = document.createRange();
  range.selectNodeContents(listItem);
  range.deleteContents();

  for (let book of books) {
    listValue = document.createElement("li");
    listValue.textContent = book;
    listItem.appendChild(listValue);
  }
}

function getWelcomeMessage() {
  return "Welcome to John's Bookshop";
}

function setup() {
  let heading = document.getElementsByTagName("h1")[0];
  heading.innerHTML = getWelcomeMessage();
}
