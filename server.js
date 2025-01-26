import express from 'express';
import jsonServer from 'json-server'; 
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8000;

// Serve React build files
app.use(express.static(path.join(__dirname, 'build')));

// Create a router using json-server
const router = jsonServer.router('src/jobs.json');

// Use the router
app.use('/api', router); 

// Serve React index.html for unmatched routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});