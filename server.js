// Imports and constants
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Configure server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API Server now on port ${PORT}`);
})