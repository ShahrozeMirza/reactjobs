import express from 'express';
import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;

// Serve React build files
app.use(express.static(path.join(__dirname, 'build')));

// Serve the API using JSON Server
const apiRouter = jsonServer.router('src/jobs.json');
app.use('/api', apiRouter);

// Serve React index.html for unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
