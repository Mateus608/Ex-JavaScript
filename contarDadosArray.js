const booksByCategory = [
  {
    category: 'Riqueza',
      books: [
        {
          title: 'Os segredos da mente milionária',
          author: 'T. Harv Eker',
        },
        {
          title: 'Pai rico, pai pobre',
          author: 'Robert T., Kiyosaki e Sharon L. Letchter',
        }
      ]
  },
  {
    category: 'Inteligência Emocional',
        books: [
          {
            title: 'Você é insubstituível',
            author: 'Augusto Cury',
          }
        ]
  }
];

const totalCategories = booksByCategory.length; // contar o número de categorias

// contar número total de livros em cada categoria
console.log(totalCategories);
for (let category of booksByCategory) {
  console.log('Total de livros da categoria:',  category.category);
  console.log(category.books.length);
}

// contar número de autores
function countAuthors() {
  let authors = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if(authors.indexOf(book.author) == -1) {
        authors.push(book.author);
      }
    }
  }
  console.log('Total de autores: ', authors.length);
}

countAuthors();

// Procurar livros do autor
function booksOfAuthor(author) {
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if(book.author === author) {
        books.push(book.title);
      }
    }
  }
  console.log(`Livros do autor ${author}: ${books.join(', ')}`);
}

booksOfAuthor('Augusto Cury')