const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Serve the React build files
app.use(express.static(path.join(__dirname, 'build')));

// Serve the API using JSON Server
const apiRouter = jsonServer.router('src/jobs.json');
app.use('/api', apiRouter);

// Catch-all handler to serve React's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
