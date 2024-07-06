// Create Book
server.post('/books', async (req, res) => {
  try {
    if (
      !req.body.title
         || !req.body.author
         || !req.body.publishYear
    ) {
      return res.status(404).send({
        message: 'please include all requred fields:title,author,publishYear',
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Get all Books

server.get('/books', async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).send({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Get a single book from database
server.get('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).send({ book });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// update a given book
server.put('/books/:id', async (req, res) => {
  try {
    if (
      !req.body.title
              || !req.body.author
              || !req.body.publishYear
    ) {
      return res.status(404).send({
        message: 'please include all requred fields:title,author,publishYear',
      });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      res.status(404).send({ message: 'Book not found' });
    }
    res.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Delete A book from database

server.delete('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      res.status(404).send({ message: `Book with id ${id} is not found ` });
    }
    res.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

module.exports = {

};