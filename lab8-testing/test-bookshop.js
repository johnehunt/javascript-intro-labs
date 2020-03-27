describe("Testing the functions in bookshop", function() {

    describe("Testing getWelcomeMessage function", function() {
      it("should return the string Welcome to John's Bookshop", function() {
        expect(getWelcomeMessage()).toBe("Welcome to John's Bookshop");
      });
    });

    describe("Testing setup function", function() {
      it("should set the h1 element of the page to the welcome message", function() {
        // Given: The test scenario
        const body = document.getElementsByTagName("body")[0];
        const h1 = document.createElement("h1");
        body.append(h1);
        h1.innerHTML = "Welcome Placeholder ..."
        // When: Call the function
        setup();
        // Then: Validate the behaviour
        expect(h1.innerHTML).toBe("Welcome to John's Bookshop");
      })
    })

    describe("Testing the showBooks fucntion", function() {
      it("should set the ul elelment of the page to contain 3 books", function() {
        // Given: the test scenario
        const body = document.getElementsByTagName("body")[0];
        const ul = document.createElement("ul");
        body.append(ul);
        const li = document.createElement("li");
        li.innerHTML = "Click button to show books ...";
        ul.append(li);
        // When: Call the showBooks function
        showBooks();
        // Then: validate the behaviour
        const listItem = document.querySelector("ul");
        const numberOfElements = listItem.childElementCount;
        expect(numberOfElements).toBe(3);

      })
    })

});