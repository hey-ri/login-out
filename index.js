const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose
  .connect('mongodb+srv://hyeri:qlqjs1234@boilerplate.8kofbi0.mongodb.net/?retryWrites=true&w=majority', {})
  .then(() => console.log('mongooDB connected'))
  .catch((err) => console.log(err));
