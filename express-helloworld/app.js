var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World! con barrita simple /\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars! y se pudo hacerrr\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080  0000000 jotita!');
});

