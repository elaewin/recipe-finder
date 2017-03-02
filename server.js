'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes for requesting HTML resources

/// WORKING CODE!!!!
app.get('/edamam/*', proxyEdamam);

// function proxyEdamam(request, response) {
//   console.log('Routing a Edamam request');
//   (requestProxy({
//     url: `https://api.edamam.com/search`,
//     headers: {
//       app_id: 'c7f3df99',
//       app_key: '696d1c5a70d56f6c83beecf8c7399c50'}
//   }))(request, response);
//}
//////

function proxyEdamam(request, response) {
  console.log('inside proxyEdamam...');
  (requestProxy({
    url: `https://api.edamam.com/search`,
    headers: {
      app_id: '8923b38a',
      app_key: '9e829390b2e423e7cee9b5a57834d3ab'
    }
  }))(request, response);
}


app.get('/', function(request, response) {
  response.sendFile('index.html', {root: '.'});
});
app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}!`);
});
