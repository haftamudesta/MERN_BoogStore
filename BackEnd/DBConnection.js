const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({ path: '../config.env' });
const DBConnection = () => {
  mongoose.connect(process.env.CONN_STR).then(() => {
    console.log('connection established');
  }).catch((err) => {
    console.log(err);
  });
};
module.exports = DBConnection;
