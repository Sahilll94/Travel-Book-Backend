require('dotenv').config();

const admin = require('firebase-admin');

const requiredSettings = [
  'FIREBASE_PROJECT_ID',
  'FIREBASE_PRIVATE_KEY',
  'FIREBASE_CLIENT_EMAIL'
];

const missingSettings = requiredSettings.filter((setting) => !process.env[setting]);

if (missingSettings.length > 0) {
  throw new Error(`Missing Firebase configuration: ${missingSettings.join(', ')}`);
}

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
};

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
