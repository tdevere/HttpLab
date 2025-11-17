# 🚀 Quick Start Guide

Get up and running in 60 seconds!

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Generate SSL Certificates
```bash
npm run generate-cert
```

## Step 3: Start the Server
```bash
npm start
```

## Step 4: Open Your Browser

### Option A: HTTP (No Security Warning)
Open: **http://localhost:8080**

### Option B: HTTPS (Educational Security Warning)
Open: **https://localhost:8443**

**You'll see a security warning** - this is PERFECT for learning!
- Click "Advanced"
- Click "Proceed to localhost (unsafe)"
- This demonstrates what the tutorial teaches!

## 🎓 Now What?

1. **Read the OSI Model Primer** at the top of the page
2. **Click on each stop** in the Terminal Map (1-9)
3. **Read the detailed explanations** for each stage
4. **Click "Test Connection"** to see your current protocol
5. **Compare HTTP vs HTTPS** by switching between the two URLs

## 🎯 Learning Path

**Recommended order:**
1. Start on HTTP to understand the basics
2. Switch to HTTPS and accept the certificate warning
3. Follow the stops in sequence (1→2→3...→9)
4. Use arrow keys (↑/↓) to navigate between stops
5. Open DevTools (F12) → Security tab to inspect the real certificate

## ⚙️ Troubleshooting

**Port already in use?**
```bash
# Windows
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# Or just change the port in server.js
```

**Certificate error?**
```bash
# Regenerate certificates
npm run generate-cert
```

## 📚 What You'll Learn

- Complete HTTPS handshake process
- OSI Model layers in action
- TCP three-way handshake
- TLS/SSL encryption
- Certificate verification
- Key exchange (Diffie-Hellman)
- Asymmetric vs Symmetric encryption
- Perfect Forward Secrecy

---

**Happy Learning! 🔐**
