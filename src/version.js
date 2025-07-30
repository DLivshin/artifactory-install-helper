// src/version.js
import { debugLog } from './utils.js';

// ========================================================================
// Artifactory Version Fetching
// ========================================================================

/**
 * Attempts to fetch the Artifactory version from FluidTopics metadata.
 * @returns {Promise<string>} A promise that resolves with the version string if found.
 * @throws {Error} Rejects the promise if the API is unavailable or the data is not found.
 */
function getVersionFromMetadata() {
  return new Promise((resolve, reject) => {
      // Check if the FluidTopics API is available on the window object
      if (!window.fluidtopics || !window.fluidtopics.FluidTopicsApi) {
        return reject(new Error("FluidTopics API not available."));
      }
      resolve(new window.fluidtopics.FluidTopicsApi());
    })
    .then(FTAPI => {
      FTAPI["ftCallingApp"] = "artifactory-install-helper"; // Set a caller ID
      const body = {
        "filters": [{
          "key": "ft:originId",
          "values": ["artifactory-install-helper"]
        }, {
          "key": "ft:sourceId",
          "values": ["interactive_content"]
        }]
      };
      return FTAPI.post('/api/khub/maps/search', body);
    })
    .then(searchResult => {
     // Check for a valid result with metadata
      if (searchResult && searchResult.results && searchResult.results.length > 0 && Array.isArray(searchResult.results[0].metadata)) {
        debugLog("Success: Found Interactive KB Metadata");
        // Find the specific metadata object with the key 'ArtifactoryLatestVersion'
        const versionMetadata = searchResult.results[0].metadata.find(meta => meta.key === 'ArtifactoryLatestVersion');

        // Check if we found the version object and if it has a value
        if (versionMetadata && versionMetadata.values && versionMetadata.values.length > 0) {
          const version = versionMetadata.values[0];
          debugLog(`Successfully extracted version from metadata: ${version}`);
          return version; // Resolve the promise with the found version
        } else {
          // The metadata was found, but the specific version key was missing or empty.
          throw new Error("Metadata found, but 'ArtifactoryLatestVersion' key was not present or had no value.");
        }
      } else {
        throw new Error("Map 'artifactory-install-helper' not found or no results matching the criteria.");
      }
    });
}

/**
 * Fetches the latest Artifactory release version from the JFrog versions endpoint in the mill.
 * This function is used as a fallback.
 * @returns {Promise<string>} A promise that resolves with the latest version string.
 */
async function getLatestArtifactoryRelease() {
  const url = 'http://mill.jfrog.info/artifactory/versions';

  try {
    debugLog("Attempting to fetch latest version from fallback URL...");
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}. Failed to fetch from ${url}.`);
    }

    const allTags = await response.json();
    const versions = [];

    // Filter for tags that match a semantic versioning pattern (e.g., 7.80.6)
    allTags.forEach(tag => {
      if (/^\d+(\.\d+){1,2}$/.test(tag)) {
        versions.push(tag);
      }
    });

    if (versions.length === 0) {
      debugLog("Fallback failed: No valid versions found in the response.");
      return '&lt;version&gt;';
    }

    // Sort versions to find the latest one
    versions.sort((v1, v2) => {
      const parts1 = v1.split('.').map(Number);
      const parts2 = v2.split('.').map(Number);
      for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
        const p1 = parts1[i] || 0;
        const p2 = parts2[i] || 0;
        if (p1 > p2) return -1;
        if (p1 < p2) return 1;
      }
      return 0;
    });

    debugLog(`Success: Fallback found latest version: ${versions[0]}`);
    return versions[0];

  } catch (error) {
    debugLog("Error during fallback version fetch:", error);
    return '&lt;version&gt;'; // Return default value if fallback also fails
  }
}

// ========================================================================
// Main Execution Logic
// ========================================================================

export async function getArtifactoryVersion() {
    try {
      return await getVersionFromMetadata();
    } catch (error) {
      debugLog(`Metadata check failed: ${error.message}.`);
      return await getLatestArtifactoryRelease();
    }
  }


