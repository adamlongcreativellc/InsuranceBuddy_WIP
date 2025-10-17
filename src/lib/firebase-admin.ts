import { initializeApp, getApps, App } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";

let app: App;
let db: Firestore;

function initializeFirebase() {
  if (getApps().length === 0) {
    // Firebase App Hosting automatically provides Application Default Credentials
    // and populates configuration. No arguments needed.
    app = initializeApp();
  } else {
    app = getApps()[0];
  }

  db = getFirestore(app);

  return { app, db };
}

// Initialize on module load
const firebase = initializeFirebase();

export { firebase };
export const firestore = firebase.db;
