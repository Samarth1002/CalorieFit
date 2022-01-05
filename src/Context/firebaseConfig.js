import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5b9csEnirX4-JZDI_svWtQcLwD-ixRTQ",
  authDomain: "singin-d0b45.firebaseapp.com",
  projectId: "singin-d0b45",
  storageBucket: "singin-d0b45.appspot.com",
  messagingSenderId: "295409396806",
  appId: "1:295409396806:web:38f5e720d2e56945862e47",
  measurementId: "G-CM3VF7KYMN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
