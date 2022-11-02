import React from 'react'
import { createRoot } from 'react-dom/client'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import getFirebaseConfig from './utils/firebaseConfig';

import App from './App';

const initializeFirebaseApp = async () => {
    try {
        const { data } = await getFirebaseConfig();
        const app = initializeApp(data);
        getAnalytics(app);
    }
    catch (error) {
        console.log("ERROR: InitializeFirebase()");
        throw error;
    }
}

initializeFirebaseApp();

const root = createRoot(document.getElementById("root"))
root.render(<React.StrictMode><App /></React.StrictMode>)
