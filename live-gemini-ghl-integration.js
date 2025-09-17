{
  "name": "gemini-ghl-chat",
  "version": "1.0.0",
  "description": "Live chat interface for GHL-Gemini integration",
  "main": "live-gemini-ghl-integration.js",
  "scripts": {
    "start": "node live-gemini-ghl-integration.js",
    "dev": "nodemon live-gemini-ghl-integration.js"
  },
  "dependencies": {
    "@google/generative-ai": "^0.17.1",
    "express": "^4.18.2",
    "cors": "^2.8.5"
  },
  "engines": {
    "node": "18.x"
  }
}
