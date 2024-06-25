
// import library classes, book class, audiobook class, games class, and movie class, music class

const { Book } = require("./Book");
const { Media } = require("./Media");
const { Library } = require("./Library");

// create instances of classes
// LOTR as an instance of Book Class

// let lotr = new Media("fellowship of the ring");

let lotr = new Book("fellowship of the ring");

console.log(lotr);
console.log(lotr.name);
console.log(lotr.edition);

// Do things with those instances

// Create an instance of a library
// add media instances into the library instance

let libraryInstance = new Library();
libraryInstance.books.push(lotr);

// log the data in the library
console.log(libraryInstance);

// How to access the name of the book in the library:
console.log(libraryInstance.books[0].name);