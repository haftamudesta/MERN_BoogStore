const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Book = require('./modules/BookModule');
const DBConnection = require('./DBConnection');

const BooksRoute = require('./routes/BooksRoute');

dotenv.config({ path: './config.env' });// this should be before express

const server = express();
const PORT = process.env.PORT || 5000;

server.use(express.json());
// CORS=cross origin resource sharing
server.use(cors());
//     origin:'http://localhost:3000',
//     methods:['POST','GET','PUT','DELETE'],
//     allowedHeaders:['Content-Type']

// }));
server.use('/books', BooksRoute);

DBConnection();
server.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
