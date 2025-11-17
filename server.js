const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const app = express();
const HTTP_PORT = 8080;
const HTTPS_PORT = 8443;

// --- 1. Set up Certificates ---
const privateKey = fs.readFileSync(path.join(__dirname, 'certs', 'key.pem'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, 'certs', 'cert.pem'), 'utf8');
const credentials = { key: privateKey, cert: certificate };

// --- 2. Serve Static Frontend Files ---
// You will put your React/HTML files in a folder named 'public'
app.use(express.static('public'));

// --- 3. Route for Testing HTTP/HTTPS ---
app.get('/test-connection', (req, res) => {
    const protocol = req.protocol; // Will be 'http' or 'https'
    res.json({
        message: `Connection successful via ${protocol.toUpperCase()}`,
        status: protocol === 'https' ? 'Secure' : 'Insecure'
    });
});

// --- 4. Start Servers ---
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(HTTP_PORT, () => {
    console.log(`HTTP Server running on http://localhost:${HTTP_PORT}`);
});

httpsServer.listen(HTTPS_PORT, () => {
    console.log(`HTTPS Server running on https://localhost:${HTTPS_PORT}`);
    console.log('NOTE: Your browser will warn you because the certificate is self-signed. This is correct for the teaching purpose!');
});
