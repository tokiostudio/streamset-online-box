const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

app.post('/auth', (req, res) => {
    const { streamKey, streamAuth } = req.body;
    
    // For testing purposes, authorize if streamAuth is 'test123'
    const authorized = streamAuth === 'test123';
    
    console.log(`Auth request for stream '${streamKey}' with auth '${streamAuth}': ${authorized ? 'AUTHORIZED' : 'DENIED'}`);
    
    res.json({ authorized });
});

app.listen(port, () => {
    console.log(`Test auth server running at http://localhost:${port}`);
});