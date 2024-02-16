// Import required modules
const express = require('express');

// Create an instance of Express application
const app = express();
const port = 3000;

// Define sample data (usually this would come from a database)
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Define routes
// GET /api/users - Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET /api/users/:id - Get user by ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.json(user);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
