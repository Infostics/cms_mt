// Import required modules
const express = require('express');

// Create an instance of express
const app = express();

// Define a GET endpoint
app.get('/', (req, res) => {
  res.send('Hello, World!'); // Respond with "Hello, World!" when this endpoint is accessed
});

// Start the server
const PORT = process.env.PORT || 3001; // Set port from environment variable or default to 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
