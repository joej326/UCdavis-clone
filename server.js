const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
// const config = require('./.config.js');
const massive = require('massive');

const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));




app.listen(8011, function(){
  console.log('working');
});
