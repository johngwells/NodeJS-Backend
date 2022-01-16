const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/', require('./controllers/animals'));

app.get('/', (req, res) => {
  res.send('Find Your Missing Pet');
  res.status(200);
});

app.listen(port, () => {
  console.log(`server is running on localhost:${port}`);
});
