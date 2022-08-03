// Imports and constants
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Routes
const htmlRoutes = require('./routes/htmlRoutes');
const apis = require('./routes/api');

// Configure server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Map API routes
app.use('/api', apis);

// Map the html routes
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API Server now on port ${PORT}`);
})