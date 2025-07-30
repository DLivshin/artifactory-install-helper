// main.js

import './style.css'; // Imports the global CSS
import { getArtifactoryVersion } from './version.js';
import { initializeApp } from './ui.js';

(async () => {
  const app = document.getElementById('app');
  if (!app) {
    console.error('Could not find #app element.');
    return;
  }
  
  const version = await getArtifactoryVersion();
  initializeApp(app, version);
})();