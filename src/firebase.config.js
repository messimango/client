import { getApp, getApps, initializeApp } from 'firebase/app';
import {getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAqLpgZw8WGtXtVk0emfIvYefNDBbmksyI",
    authDomain: "poolapp-e50f5.firebaseapp.com",
    databaseURL: "https://poolapp-e50f5-default-rtdb.firebaseio.com",
    projectId: "poolapp-e50f5",
    storageBucket: "poolapp-e50f5.appspot.com",
    messagingSenderId: "661162012481",
    appId: "1:661162012481:web:ba17a8218e344f23263bc0"
  };

//   initialize app only when there is no app present 
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage };