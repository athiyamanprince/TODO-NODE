
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./dao/database');

const app = express();

// Test db connection
db.authenticate()
    .then(() => console.log('MariaDB connected'))
    .catch(err => console.error(err));

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/todos', require('./routes/todo'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))