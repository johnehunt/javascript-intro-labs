const books = [
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
    let unorderedList = document.querySelector("ul");
  
    // Allows us to delete current contents of listItem
    let range = document.createRange();
    range.selectNodeContents(unorderedList);
    range.deleteContents();
  
    // Now loop through books adding a set of list items
    for (let book of books) {
      console.log(book);
      let listItem = document.createElement("li");
      listItem.textContent = book;
      unorderedList.appendChild(listItem);
    }
  }
  