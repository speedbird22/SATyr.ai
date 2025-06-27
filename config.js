 // Configuration file for SATyr AI Chat
// Keep this file secure and never commit it to version control

const CONFIG = {
  // Personal AI API Configuration
  personalAI: {
    apiKey: "rzZknlckhFldf2YV2AcpHlxmknkcL7Bo",
    domain: "km-pfrdhsi",
    baseUrl: "https://api.personal.ai/v1/message",
  },

  // Firebase Configuration
  firebase: {
    apiKey: "AIzaSyBgryPljveYRW43sje-VBB0GFG99ueEo1g",
    authDomain: "aisatyr.firebaseapp.com",
    projectId: "aisatyr",
    storageBucket: "aisatyr.firebasestorage.app",
    messagingSenderId: "188602394157",
    appId: "1:188602394157:web:df6009fc129d35acd6baa4",
    measurementId: "G-MLQM483B7L",
  },
}

// Make config available globally
window.SATYR_CONFIG = CONFIG