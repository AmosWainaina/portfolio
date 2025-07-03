const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the main portfolio page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Portfolio server running at http://localhost:${PORT}`);
});