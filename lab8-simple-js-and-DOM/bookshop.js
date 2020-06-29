let books = [
  [1, "JavaScript Unleashed", "Pete Smith", "Technical", "Tech Books", 15.99],
  [2, "JavaScript Server", "Pete Smith", "Technical", "Tech Books", 12.99],
  [3, "JavaScript Live", "John Cooke", "Technical", "Tech Books", 14.49]
];

function getWelcomeMessage() {
  return "Welcome to John's Bookshop";
}

function setup() {
  let heading = document.getElementsByTagName("h1")[0];
  heading.innerHTML = getWelcomeMessage();
}

function showBooks() {
    let listItem = document.querySelector("ul");
  
    let range = document.createRange();
    range.selectNodeContents(listItem);
    range.deleteContents();
  
    for (let book of books) {
      console.log(book);
      let listValue = document.createElement("li");
      listValue.textContent = book;
      listItem.appendChild(listValue);
    }
  }
  