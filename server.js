import express from 'express';
import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert module URL to directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;

// Serve React build files
app.use(express.static(path.join(__dirname, 'build')));

// Create a router using json-server
const router = jsonServer.router(path.join(__dirname, 'src', 'jobs.json'));

// Use the router
app.use('/api', router);

// Serve React index.html for unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});