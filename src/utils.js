// src/utils.js

const isDebugMode = false; // Set to false to disable console logs

// Helper function for conditional logging
export function debugLog(...args) {
    if (isDebugMode) {
        console.log(...args);
    }
}