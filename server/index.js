require('dotenv').config()
const express = require('express');
const cors = require('cors');

const app = express();

const pictures = require('./pictures');

app.use(express.json());
app.use(cors());

app.get('/api/photos', (req, res) => {
  res.json(pictures);
});

app.listen(8888, () => {
  console.log('Server has been started!');
});
