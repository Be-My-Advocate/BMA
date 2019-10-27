
const express = require('express');
var bodyParser = require('body-parser')
const app = express();

// Set the port
const PORT = process.env.PORT || 4000;

// Import Path
const path = require('path');

// Static files
app.use(express.static('build'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// API Routes
app.use('/api/users', require('./routes/user-routes'));

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});
