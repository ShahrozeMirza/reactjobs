import express from 'express';
import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert module URL to directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;

// Serve static files from Vite's output directory (build)
app.use(express.static(path.join(__dirname, 'build')));

// JSON Server setup
const router = jsonServer.router(path.join(__dirname, 'jobs.json'));
const middlewares = jsonServer.defaults();
app.use('/api', middlewares, router);

// Handle SPA routing: always return index.html for unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});