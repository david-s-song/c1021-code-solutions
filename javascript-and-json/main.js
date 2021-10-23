var books = [
  {
    isbn: '9780241972199',
    title: '1914 Days of Hope',
    author: 'Lyn MacDonald'
  },

  {
    isbn: '9780241984758',
    title: 'The Catcher in the Rye',
    author: 'J.D Salinger'
  },

  {
    isbn: '9780099549482',
    title: 'To Kill A Mockingbird',
    author: 'Harper Lee'
  }

];

console.log('typeOf books: ', typeof books);

var jsonBooks = JSON.stringify(books);
console.log('typeOf jsonBooks: ', typeof jsonBooks);

var string = '{"id" : "12335", "Name" : "David Song"}';
console.log('typeOf string: ', typeof string);

var stringObj = JSON.parse(string);
console.log('typeOf stringObj: ', typeof stringObj);
