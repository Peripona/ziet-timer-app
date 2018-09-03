var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/click', function (req, res) {
  app.counter = app.counter || 0;
  app.counter += 1;
  res.send(`Clicks: ${app.counter}`);
});

app.listen(3000, () =>
  console.log("Running localhost on 3000"));