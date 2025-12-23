const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!

// 1. Select the DOM element with the id 'header'
const bookStoreTitle = document.querySelector('#header');

// 2. Change its text to the 'name' property of the bookStore object
bookStoreTitle.textContent = bookStore.name;

// Select the element where the books will be listed
const bookList = document.querySelector('#book-list');

// Loop through every book in the 'books' array
bookStore.books.forEach(book => {
    // 1. Create the necessary HTML elements
    const bookContainer = document.createElement('li');
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookImage = document.createElement('img');
    
    // 2. Assign the book's data to the created elements
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookImage.src = book.imageUrl;

    // 3. Assemble the elements together
    // Add title, author, and image into the li (bookContainer)
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);

    // 4. Append the finished li to the main book list in the DOM
    bookList.appendChild(bookContainer);
});
