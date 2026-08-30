// =============================================================
//  ServiHub — Configuration
//  Paste your Firebase project config below. Until you do, the
//  app automatically runs in LOCAL DEMO MODE (data is stored in
//  the browser via localStorage) so you can preview everything.
// =============================================================

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// ---- Cloudinary (unsigned upload) — used for provider & profile images ----
// Create an unsigned upload preset in your Cloudinary dashboard and set it here.
export const cloudinaryConfig = {
  cloudName: "YOUR_CLOUD_NAME",
  uploadPreset: "YOUR_UNSIGNED_PRESET",
};

// True when Firebase has real credentials (not the placeholders above).
export const firebaseReady =
  firebaseConfig.apiKey &&
  !firebaseConfig.apiKey.startsWith("YOUR_") &&
  firebaseConfig.projectId &&
  !firebaseConfig.projectId.startsWith("YOUR_");

export const cloudinaryReady =
  cloudinaryConfig.cloudName &&
  !cloudinaryConfig.cloudName.startsWith("YOUR_") &&
  cloudinaryConfig.uploadPreset &&
  !cloudinaryConfig.uploadPreset.startsWith("YOUR_");

export const SERVICE_CATEGORIES = [
  { id: "plumbing", name: "Plumbing", icon: "bi-droplet-half" },
  { id: "electrical", name: "Electrical", icon: "bi-lightning-charge" },
  { id: "cleaning", name: "Cleaning", icon: "bi-stars" },
  { id: "carpentry", name: "Carpentry", icon: "bi-hammer" },
  { id: "painting", name: "Painting", icon: "bi-brush" },
  { id: "gardening", name: "Gardening", icon: "bi-tree" },
];
