# 🔒 HTTPS Terminal Map - Interactive Tutorial

An interactive, educational website that teaches HTTPS and the OSI Model through a visual "terminal map" progression. Built with Node.js and Express.

## 🎯 Project Overview

This project provides a professional-quality, cross-platform interactive learning experience that explains:
- The complete HTTPS handshake process
- How the 7-layer OSI Model relates to secure web communication
- TCP/IP networking fundamentals
- TLS/SSL encryption and certificate verification
- Key exchange and symmetric encryption

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd learnhttps
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Generate SSL certificates:**
   ```bash
   npm run generate-cert
   ```
   This creates self-signed certificates in the `certs/` folder for local HTTPS testing.

4. **Start the server:**
   ```bash
   npm start
   ```

5. **Open your browser:**
   - HTTP: http://localhost:8080
   - HTTPS: https://localhost:8443

   **Note:** You'll see a security warning for HTTPS (expected with self-signed certificates). Click "Advanced" → "Proceed to localhost" to continue.

## 📁 Project Structure

```
learnhttps/
├── certs/              # SSL certificates (generated)
│   ├── key.pem         # Private key
│   └── cert.pem        # Public certificate
├── public/             # Static frontend files
│   └── index.html      # Interactive tutorial page
├── generate-cert.js    # Certificate generation script
├── server.js           # Express server (HTTP + HTTPS)
├── package.json        # Project dependencies
└── README.md           # This file
```

## 🎓 Features

### Interactive Terminal Map
- **Visual Journey:** Click through 9 stops showing the complete HTTPS connection process
- **OSI Model Integration:** Each stop clearly shows which OSI layer(s) are involved
- **Detailed Explanations:** Comprehensive content at each stage with code examples
- **Beautiful UI:** Modern, responsive design with smooth animations

### Educational Content Includes:
1. **The Request** - Understanding URLs and the Application Layer
2. **DNS Lookup** - Domain name to IP address resolution
3. **TCP Handshake** - The three-way handshake explained
4. **TLS ClientHello** - Client initiates secure connection
5. **TLS ServerHello** - Server responds with certificate
6. **Certificate Verification** - Trust chain and asymmetric encryption
7. **Key Exchange** - Diffie-Hellman and Perfect Forward Secrecy
8. **Shared Secret Creation** - Deriving session keys
9. **Encrypted Data Transfer** - Secure communication begins

### OSI Model Primer
Complete reference table showing all 7 layers and their roles in HTTPS communication.

### Interactive Testing
- Test HTTP vs HTTPS connections in real-time
- See which protocol you're currently using
- Understand the difference between secure and insecure connections

## 🔧 Technical Details

### Backend
- **Framework:** Express.js
- **Servers:** Dual HTTP (port 8080) and HTTPS (port 8443) servers
- **Certificates:** Self-signed SSL certificates using the `selfsigned` package

### Frontend
- **Pure HTML/CSS/JavaScript** (no framework dependencies)
- **Responsive Design** works on desktop, tablet, and mobile
- **Keyboard Navigation** - Use arrow keys to navigate between stops
- **Smooth Animations** for better user experience

### Security Features Demonstrated
- ✅ TLS 1.2/1.3 support
- ✅ Self-signed certificate generation
- ✅ Certificate chain verification concepts
- ✅ Asymmetric and symmetric encryption explained
- ✅ Perfect Forward Secrecy (Diffie-Hellman)
- ✅ Session key derivation

## 🎨 Usage Tips

1. **Start with HTTP first** (http://localhost:8080) to see the basics
2. **Switch to HTTPS** (https://localhost:8443) to experience the security warning
3. **Click through each stop** in order to follow the logical progression
4. **Use keyboard arrows** (↑/↓) to navigate between stops
5. **Click "Test Connection"** to see your current protocol status
6. **Open DevTools** (F12) → Security tab to inspect the real certificate

## 📚 Learning Objectives

After completing this tutorial, you'll understand:
- How HTTPS differs from HTTP
- The complete TLS handshake process step-by-step
- Why certificates and Certificate Authorities matter
- How asymmetric encryption enables symmetric encryption
- What Perfect Forward Secrecy means
- How the OSI Model layers work together in practice
- Why HTTPS is essential for web security

## 🔒 Security Notes

- **Self-Signed Certificates:** This project uses self-signed certificates for educational purposes. In production, use certificates from trusted CAs like Let's Encrypt.
- **Browser Warnings:** The security warnings you see are EXACTLY what this project teaches about - certificate verification!
- **Local Only:** This setup is designed for local learning. Never use self-signed certificates in production.

## 🛠️ Customization

### Change Ports
Edit `server.js`:
```javascript
const HTTP_PORT = 8080;  // Change this
const HTTPS_PORT = 8443; // Change this
```

### Regenerate Certificates
```bash
npm run generate-cert
```

### Modify Content
Edit `public/index.html` - all content is in the `stepsData` array in the JavaScript section.

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Find process using port 8080 or 8443
netstat -ano | findstr :8080
netstat -ano | findstr :8443

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

### Certificate Errors
Delete the `certs` folder and regenerate:
```bash
npm run generate-cert
```

### Browser Won't Accept Certificate
1. Click "Advanced" in the security warning
2. Click "Proceed to localhost (unsafe)" - this is safe for local learning
3. Alternatively, add the certificate to your browser's trusted certificates

## 📖 Additional Resources

- [TLS 1.3 RFC](https://tools.ietf.org/html/rfc8446)
- [OSI Model Guide](https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/)
- [How HTTPS Works](https://howhttps.works/)

## 📝 License

ISC License - Feel free to use this for educational purposes!

## 🤝 Contributing

This is an educational project. Feel free to fork and enhance it with:
- More detailed explanations
- Additional visualizations
- Interactive packet inspection
- Wireshark integration examples
- More cipher suite explanations

## ✨ Credits

Created as an interactive learning tool to demystify HTTPS and network security concepts.

---

**Happy Learning! 🎓🔐**
