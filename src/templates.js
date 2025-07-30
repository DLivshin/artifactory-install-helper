// src/templates.js

// ========================================================================
// HTML Template & Styling
// ========================================================================
export const cssTemplate = `

        /* --- Component Styling --- */
        :host { display: block; font-family: 'Arial', 'Helvetica', sans-serif; font-size: 16px; color: #333; --primary-color: #40be46; --primary-dark-color: #45a049; --border-color: #ddd; --text-light: #555; --section-bg: #fdfdfd; --table-header-bg: #f0f0f0; --highlight-bg: #e8f5e9; --details-bg: #f1f1f1; --code-bg: #f5f5f5; --aside-bg: #f8f8f8; --aside-border: #eee;}
        p, ul, li, label, details { line-height: 1.6; color: var(--text-light); }
        ul { padding-left: 20px; margin-bottom: 1em; }
        ol { padding-left: 25px; margin-bottom: 1em; }
        li { margin-bottom: 0.5em; }
        a { color: var(--primary-dark-color); text-decoration: none; }
        a:hover { text-decoration: underline; }
        hr { border: none; border-top: 1px solid var(--border-color); margin: 1em 0; }
        code { background-color: var(--code-bg); padding: 0.2em 0.4em; border-radius: 3px; font-family: monospace; color: #c7254e; font-size: 0.95em; }
        pre { position: relative; background-color: var(--code-bg); border: 1px solid var(--border-color); border-radius: 4px; padding: 10px; padding-right: 45px; /* Space for button */ overflow-x: auto; white-space: pre-wrap; word-wrap: break-word; font-size: 0.9em; margin-top: 0.5em; margin-bottom: 1em; }
        pre code { background-color: transparent; padding: 0; color: inherit; white-space: pre-wrap; }
        .copy-button { position: absolute; top: 5px; right: 5px; background-color: #6c757d; color: white; border: none; border-radius: 3px; padding: 3px 8px; font-size: 0.8em; cursor: pointer; opacity: 0.7; transition: opacity 0.2s; }
        pre:hover .copy-button { opacity: 1; }
        .copy-button:hover { background-color: #5a6268; }
        .copy-button:active { background-color: #545b62; }

        h1, h2, h3 { color: var(--primary-color); margin-top: 1.5em; margin-bottom: 0.5em; font-weight: normal; }
        h1 { font-size: 2.2em; font-weight: bold; text-shadow: 1px 1px 2px #eee; border-bottom: 2px solid var(--primary-color); padding-bottom: 0.3em; margin-top: 0; }
        h3 { font-size: 1.4em; color: var(--primary-dark-color); margin-top: 1.5em; }
        h4 { font-size: 1.2em; color: #444; margin-bottom: 0.3em; margin-top: 1.2em; font-weight: bold; border-bottom: 1px solid #eee; padding-bottom: 0.2em;}
        h5 { font-size: 1em; color: #555; margin-bottom: 0.2em; font-weight: bold; }


        label { display: block; font-weight: bold; color: #333; margin-bottom: 0.5em; font-size: 1em; }
            /* Specific label styles */
        .input-group label { margin-bottom: 0.2em; font-size: 0.9em; font-weight: normal; color: var(--text-light); }
        label.inline-label { display: inline-block; margin-left: 0.5em; font-weight: normal; } /* For checkboxes */

        select, input[type="text"], input[type="password"], input[type="number"] { /* Added number */
            display: block; width: 100%; max-width: 450px; padding: 10px 12px; font-size: 1em; border: 1px solid var(--border-color); border-radius: 4px; background-color: white; color: #333; box-sizing: border-box; transition: border-color 0.2s ease, box-shadow 0.2s ease; margin-bottom: 1em;
        }
            input[type="checkbox"] { margin-right: 0.5em; vertical-align: middle; }
            input[type="radio"] { margin-right: 0.3em; vertical-align: middle; }
        .radio-group label { display: inline-block; margin-right: 1em; font-weight: normal; }

        .s3info {
            max-height: 0;
            overflow: hidden; 
            transition: 1.25s ease-out; 
            color: #8a6d3b; background-color: #fcf8e3;  padding: 0px 0px; border-radius: 4px; margin-top: 10px;
        }
        .s3info.visible{
            max-height: 10vh;
            transition: 1.25s ease-in; 
            color: #8a6d3b; background-color: #fcf8e3;  padding: 10px 15px; border-radius: 4px; margin-top: 10px; 
        }
        
        .transition{
            max-height: 0;
            overflow: hidden; 
            transition: 1.25s ease-out; 
        }
        .transition.visible{
            max-height: 10vh;
            transition: 1.25s ease-in; 
        }
            
        select:focus, input[type="text"]:focus, input[type="password"]:focus, input[type="number"]:focus { border-color: var(--primary-color); box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2); outline: none; }
        .input-group { margin-bottom: 0.8em; }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

        /* Firefox */
        input[type=number] {
        -moz-appearance: textfield;
        }
        .guidance-section { margin-top: 1.5em; margin-bottom: 1.5em; padding: 1.5em; border: 1px solid var(--border-color); border-radius: 5px; background-color: var(--section-bg); box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
        .guidance-section h3 { margin-top: 0; }

        /* Layout Helpers */
        .flex-layout { display: flex; flex-wrap: wrap; gap: 20px; align-items: flex-start; }
        .flex-main { flex: 1 1 60%; min-width: 300px; }
        .flex-aside { flex: 1 1 35%; min-width: 250px; padding: 1em; background-color: var(--aside-bg); border: 1px solid var(--aside-border); border-radius: 4px; font-size: 0.9em; }
        .flex-aside h4 { margin-top: 0; color: var(--primary-dark-color); }

        /* OS Info Specific */
        #osInfoContainer { /* Removed transition for simpler show/hide */ }
        #osInfoContainer table { font-size: 0.95em; margin-top: 0.5em; }
        #osInfoContainer ul { padding-left: 15px; margin-top: 0.5em; }
        #osInfoContainer li { margin-bottom: 0.3em; }

        /* DB Specific Layout */
        /* Uses .flex-main and .flex-aside */

            /* Filestore Specific Layout */
        /* Uses .flex-main and .flex-aside */
        #filestoreDetailsContainer p:first-child { margin-top: 0; }
        #filestoreInputsContainer { margin-top: 1em; padding-top: 1em; border-top: 1px dashed var(--border-color); }


        table { width: 100%; border-collapse: collapse; margin-top: 1em; margin-bottom: 1em; font-size: 0.95em; background-color: #fff; }
        th, td { border: 1px solid var(--border-color); padding: 8px 12px; text-align: left; vertical-align: top; }
        th { background-color: var(--table-header-bg); font-weight: bold; }

        details { border: 1px solid var(--border-color); border-radius: 4px; margin-top: 1em; background-color: #fff; }
        summary { padding: 10px 10px 10px 30px; font-weight: bold; cursor: pointer; background-color: var(--details-bg); border-bottom: 1px solid var(--border-color); list-style: none; position: relative; color: #333; }
        summary::before { content: '▶'; position: absolute; left: 10px; top: 50%; transform: translateY(-50%) rotate(0deg); font-size: 0.8em; transition: transform 0.2s ease-in-out; }
        details[open] summary::before { transform: translateY(-50%) rotate(90deg); }
        details > :not(summary) { padding: 15px; border-top: 1px solid var(--border-color); background-color: #fff; }

        .input-row {
            display: flex;
            gap: 1em; 
            align-items: flex-start;
            margin-bottom: 0.8em; 
        }

        .input-row .input-group {
            flex: 1; 
            margin-bottom: 0;
        }
        .input-row .input-group input[type="text"],
        .input-row .input-group input[type="password"],
        .input-row .input-group input[type="number"] {
            max-width: none; /* Allow inputs to fill the flex item's width */
            /* margin-bottom: 0; Remove if handled by .input-group or .input-row */
        }
    

        .info-box { margin-top: 1em; padding: 1em; background-color: var(--highlight-bg); border: 1px solid #c8e6c9; border-radius: 4px; border-left: 5px solid var(--primary-color); }
        .info-box h4 { margin-top: 0; color: var(--primary-dark-color); }
        .info-box p:last-child { margin-bottom: 0; }
        .info-box .highlight { font-weight: bold; color: var(--primary-dark-color); }

        #dbVersionInfo { margin-bottom: 1em; }
        #dbVersionInfo h4 { margin-top: 0; }

        /* Installation Steps Styling */
        #installStepsSection {
            background-color: #f9fafb; /* Light grey background */
            border: 2px solid var(--primary-color); /* Primary green border */
            padding: 2em;
            margin-top: 2em;
        }
        #installStepsSection h3 {
                color: var(--primary-dark-color);
                border-bottom: 2px solid var(--primary-dark-color);
                padding-bottom: 0.3em;
                margin-bottom: 1em;
                font-weight: bold;
        }
        #installStepsContent h4 { border-bottom: none; margin-top: 1.5em; color: #333; }
        #installStepsContent .step { margin-bottom: 1.5em; padding-left: 10px; border-left: 3px solid var(--primary-color); }
        #installStepsContent .ha-note { border: 1px dashed var(--primary-dark-color); background-color: #fff; padding: 0.5em 1em; margin-top: 1em; border-radius: 4px;}


        .hidden { display: none !important; }
        .placeholder { color: #999; font-style: italic; }
        .recommendation { font-weight: bold; color: var(--primary-dark-color); }
        .warning, .db-warning { color: #8a6d3b; background-color: #fcf8e3; border: 1px solid #faebcc; padding: 10px 15px; border-radius: 4px; margin-top: 10px; }
        .db-warning strong { color: #a94442; }

        /* Style for placeholders in code snippets */
        .db-user-placeholder, .db-pass-placeholder, .db-name-placeholder, .db-port-placeholder, .db-host-placeholder {
            font-style: italic;
            color: #007bff;
            font-weight: bold;
        }
            /* Style for cache option explanations */
        .cache-option-desc { font-size: 0.85em; color: #666; margin-top: -0.4em; margin-bottom: 0.8em; display: block; }

        .beta-disclaimer {
            position: absolute; /* Changed to absolute for positioning relative to the nearest positioned ancestor or initial containing block */
            top: 5px;
            right: 5px;
            background-color: #fff3cd; /* Light yellow, common for warnings */
            color: #856404; /* Dark yellow/brown text */
            padding: 8px 12px;
            border: 1px solid #ffeeba; /* Border to match background */
            border-radius: 4px;
            font-size: 0.7em; /* Smaller font size */
            text-align: right;
            z-index: 1000; /* Ensure it's on top of other content */
            max-width: 250px; /* Optional: constrain width */
            box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Optional: subtle shadow */
        }
`; // end of style template

export const htmlTemplate = `
  <div>
        <p>This tool enables you to select a number of items regarding your specific setup. Then displays personalized guidance to assist you in the set up of your self-hosted Artifactory installation. See here for an overview of the 
        <a href="https://jfrog.com/help/r/jfrog-installation-setup-documentation/system-architecture" target="_blank">System Architecture</a>.</p>
        <p>To use this tool, select the relevant option that best reflects your required deployment, then follow the suggested specifications.</p>
        
        <div class="beta-disclaimer">
            Please be aware that the content is still under active development and may not be fully complete or accurate. We welcome your feedback to help us enhance its quality.
        </div>

        <div class="guidance-section flex-layout">
            <div class="flex-main">
                <h3>1. Select Installation Method</h3>
                <label for="installSelect">How do you want to install Artifactory?</label>
                <select id="installSelect">
                    <option value="">--Please choose an option--</option>
                    <option disabled>Helm/k8s Coming soon!</option>
                    <option value="rpm">RPM (for RHEL/AmazonLinux)</option>
                    <option value="debian">Debian (for Debian/Ubuntu)</option>
                    <option value="linux">Linux Archive (Manual Install)</option>
                    <option value="docker">Docker</option>
                    <option value="docker-compose">Docker Compose</option>
                </select>
                <div id="dockerHost" class="input-group  hidden "> 
                    <label for="hostName"><span style="color:red; font-weight: bold;">Required: </span> Host machine hostname/IP:</label> <input type="text" id="hostName" placeholder="your_host_ip_or_name"> 
                    <small> This is needed as the container inside the pod can often select an internal docker IP instead of the host IP. Artifactory must know the host machines IP for communication purposes.</small>
                </div>
            </div>
            <div id="osInfoContainer" class="flex-aside hidden"> <h4>Host System Requirements</h4>
                <div id="osInfoContent">
                    <p class="placeholder">Select an installation method to see requirements.</p>
                </div>
            </div>
        </div>

        <div class="guidance-section">
                <h3>2. Select Installation Mode</h3>
                <label for="installModeSelect">Is this a single-node install or High Availability (HA) cluster?</label>
                <select id="installModeSelect">
                    <option value="">--Please choose an option--</option>
                    <option value="singleNode">Single-node</option>
                    <option value="highAvailability">High Availability (Requires Enterprise License)</option>
                </select>
        </div>

        <div class="guidance-section">
            <h3>3. Sizing Requirements</h3>
            <label for="userRangeSelect">Select the approximate number of active users/clients:</label>
            <select id="userRangeSelect">
                <option value="0-20" selected>0-20 Users</option>
                <option value="21-100">21-100 Users</option>
                <option value="101-200">101-200 Users</option>
                <option value="200+">200+ Users (Consult Recommended)</option>
            </select>
            <div id="sizingResults" class="hidden"> <div id="vmSpecs" class="info-box"></div>
                <div id="dbSpecs" class="info-box"></div>
            </div>
                <details>
                <summary>View Detailed Sizing Guidelines</summary>
                <div>
                    <h4>Artifactory Node VM Sizing (Based on Active Clients)</h4>
                    <table><thead><tr><th>Number of Active Clients</th><th>Processor (CPU)</th><th>Memory (RAM)</th></tr></thead><tbody><tr><td>0-20</td><td>4 core CPU</td><td>6 GB</td></tr><tr><td>20-100</td><td>6 core CPU</td><td>12 GB</td></tr><tr><td>100-200</td><td>8 core CPU</td><td>18 GB</td></tr><tr><td>200+</td><td colspan="2">Consult JFrog Sales/Support</td></tr></tbody></table>
                    <h4>External Database Sizing (Mapped from Client Range to T-Shirt Size)</h4>
                    <table><thead><tr><th>Size</th><th>DB Memory</th><th>DB CPU</th><th>Max Connections</th><th>Disk IOPS</th><th>Disk Throughput</th><th>Disk Size</th></tr></thead><tbody><tr><td>XSmall (0-20 Users)</td><td>8 GB</td><td>2</td><td>50</td><td>3k</td><td>250MB/s</td><td>~30% of Binaries</td></tr><tr><td>Small (21-100 Users)</td><td>16 GB</td><td>4</td><td>100</td><td>4k</td><td>400MB/s</td><td>~30% of Binaries</td></tr><tr><td>Medium (101-200 Users)</td><td>32 GB</td><td>8</td><td>200</td><td>6k</td><td>600MB/s</td><td>~30% of Binaries</td></tr><tr><td>Large (200+ Users Start)</td><td>64 GB</td><td>16</td><td>600</td><td>10k</td><td>800MB/s</td><td>~30% of Binaries</td></tr><tr><td>XLarge</td><td>128 GB</td><td>32</td><td>2000</td><td>12k</td><td>1000MB/s</td><td>~30% of Binaries</td></tr><tr><td>2XLarge</td><td>256 GB</td><td>64</td><td>5000</td><td>20k</td><td>1500MB/s</td><td>~30% of Binaries</td></tr></tbody></table>
                </div>
            </details>
            <p><small>Select a user range to see suggested resource specifications.</small></p>
        </div>

        <div id="guidance" class="guidance-section">
            <h3>4. Database Selection & Setup</h3>
            <div class="flex-layout db-layout">
                <div class="flex-main db-main">
                    <p>Artifactory requires a Database for hosting details regarding your deployment. All environment data is stored here except the binaries themselves. The Database should run on a separate host machine or in the cloud for a production environment.</p>
                    <p id="dockerOs" class="docker-os-intro hidden">Docker Compose offers to install an internal Postgres Database as part of the install. <strong>This is not recommended for production.</strong> If you are just setting up a test instance then you may use this internal DB and ignore this section.</p>
                    <p><span class="recommendation">Tip:</span> JFrog highly recommends PostgreSQL for production. See <a href="https://jfrog.com/help/r/jfrog-installation-setup-documentation/artifactory-database-requirements" target="_blank">Database Requirements</a>.</p>

                    <label for="dbSelect">Choose your database:</label>
                    <select id="dbSelect">
                        <option value="">--Please choose an option--</option>
                        <option value="postgresql">PostgreSQL (Recommended)</option>
                        <option value="mysql">MySQL</option>
                        <option value="mariadb">MariaDB</option>
                        <option value="mssql">Microsoft SQL Server</option>
                        <option value="oracle">Oracle</option>
                    </select>
                    <div id="dbInputsContainer">
                        <h4>Database Connection Details</h4>
                        <div class="input-row">
                            <div class="input-group"> <label for="dbHostInput">Database Host/IP:</label> <input type="text" id="dbHostInput" value="your_db_host_or_ip"> </div>
                            <div class="input-group"> <label for="dbPortInput">Database Port:</label> <input type="number" id="dbPortInput" value="5432"> </div>
                        </div>
                        <div class="input-row">
                            <div class="input-group"> <label for="dbUserInput">Database Username:</label> <input type="text" id="dbUserInput" value="artifactory"> </div>
                            <div class="input-group"> <label for="dbPasswordInput">Database Password:</label> <input type="password" id="dbPasswordInput" value="password"> </div>
                        </div>

                        <div class="input-group"> <label for="dbNameInput">Database Name:</label> <input type="text" id="dbNameInput" value="artifactory"> </div>
       
                        <p><small>Enter the details for the database you prepared.</small></p>
                    </div>

                    <div id="dbVersionInfo" class="info-box"></div>
                </div>
                <div id="dbPrereqsContainer" class="flex-aside db-aside "> </div>
            </div>
        </div>

        <div class="guidance-section">
            <h3>5. Filestore Configuration</h3>
                <div class="flex-layout filestore-layout">
                <div class="flex-main filestore-main">
                    <label for="filestoreSelect">Choose your binary storage (Filestore) template:</label>
                    <select id="filestoreSelect">
                        <option value="">--Please choose an option--</option>
                        <option value="file-system">Local Storage/NFS (file-system)</option>
                        <option value="cluster-file-system" class="ha-only hidden">HA Local Storage (cluster-file-system)</option>
                        <option value="s3-storage-v3-direct">S3 Object Storage (s3-storage-v3-direct)</option>
                        <option value="azure-blob-storage-v2-direct">Azure Blob Storage (azure-blob-storage-v2-direct)</option>
                        <option value="google-storage-v2-direct">Google Cloud Storage (google-storage-v2-direct)</option>
                    </select>
                    <p><small>There are many more options, we offer the most common options here. See <a href="https://jfrog.com/help/r/jfrog-installation-setup-documentation/filestore-configuration" target="_blank"> Filestore Configuration Types</a> for more options and details. See here for a <a href="https://jfrog.com/whitepaper/best-practices-for-managing-your-artifactory-filestore-2/" target="_blank"> comprehensive dive</a> into the filestore.</small></p>

                    <div id="filestoreInputsContainer" class="hidden">
                        <hr>
                        <h4>Filestore Configuration Details</h4>
                        <div class="fs-input-group hidden" data-fs-type="file-system cluster-file-system">
                            <div class="input-group">
                                <label for="fsFileStoreDirInput">Custom Filestore Directory (Optional):</label>
                                <input type="text" id="fsFileStoreDirInput" placeholder="$JFROG_HOME/artifactory/var/data/artifactory/filestore">
                                <p><small>Leave blank to use the default path. If using NFS, provide the mount path here.</small></p>
                            </div>
                        </div>
                        <div class="fs-input-group hidden" data-fs-type="s3-storage-v3-direct">
                            <div class="input-row">
                                    <div class="input-group"><label for="s3BucketNameInput">S3 Bucket Name:</label><input type="text" id="s3BucketNameInput"></div>
                                    <div class="input-group"><label for="s3RegionInput">S3 Region:</label><input type="text" id="s3RegionInput" placeholder="e.g., us-east-1"></div>
                            </div>
                            <div class="input-row">
                                    <div class="input-group"><label for="s3EndpointInput">S3 Endpoint (Optional - for Non AWS S3):</label><input type="text" id="s3EndpointInput" placeholder="s3.amazonaws.com"></div>
                                    <div class="input-group"><label for="s3PathPrefixInput">Path Prefix (Optional):</label><input type="text" id="s3PathPrefixInput" placeholder="path/in/bucket"></div>
                            </div>
                            <div class="input-group"><label>Authentication Method:</label>
                                <input type="radio" id="s3AuthIAM" name="s3AuthMethod" value="iam" checked><label for="s3AuthIAM" class="inline-label">IAM Role (Recommended)</label><br>
                                <input type="radio" id="s3AuthKeys" name="s3AuthMethod" value="keys"><label for="s3AuthKeys" class="inline-label">Access Key & Secret Key</label>
                                <div id="s3AuthInfoMessage" class="s3info"></div>
                            </div>
                            <div id="s3KeysInputs" class="hidden">
                                <div class="input-row">
                                <div class="input-group"><label for="s3IdentityInput">AWS Access Key ID:</label><input type="text" id="s3IdentityInput"></div>
                                <div class="input-group"><label for="s3CredentialInput">AWS Secret Access Key:</label><input type="password" id="s3CredentialInput"></div>
                            </div>
                        </div>
                    </div>
                        
                        <div class="fs-input-group hidden" data-fs-type="azure-blob-storage-v2-direct">

                            <div class="input-row">
                                <div class="input-group"><label for="azureContainerNameInput">Container Name:</label><input type="text" id="azureContainerNameInput"></div>
                                <div class="input-group"><label for="azureEndpointInput">Endpoint Suffix (Optional):</label><input type="text" id="azureEndpointInput" placeholder="blob.core.windows.net"></div>
                            </div>
                            <div class="input-row">
                                    <div class="input-group"><label for="azureAccountNameInput">Storage Account Name:</label><input type="text" id="azureAccountNameInput"></div>
                                    <div class="input-group"><label for="azureAccountKeyInput">Storage Account Key:</label><input type="password" id="azureAccountKeyInput"></div>
                                </div>
                                <p><small>Alternatively, configure using a <a href="https://jfrog.com/help/r/artifactory-setting-up-azure-blob-storage-with-a-sas-token/artifactory-setting-up-azure-blob-storage-with-a-sas-token" target="_blank">SAS Token</a> manually.</small></p>
                            </div>

                        <div class="fs-input-group hidden" data-fs-type="google-storage-v2-direct">
                                <div class="input-group"><label for="gcsBucketNameInput">GCS Bucket Name:</label><input type="text" id="gcsBucketNameInput"></div>
                                <div class="input-group"><label for="gcsPathPrefixInput">Path Prefix (Optional):</label><input type="text" id="gcsPathPrefixInput"></div>
                                <div class="input-group">
                                    <input type="checkbox" id="gcsUseInstanceCredentialsInput" checked>
                                    <label for="gcsUseInstanceCredentialsInput" class="inline-label">Use Instance Credentials (Recommended)</label>
                                    <p><small>Uncheck if using GOOGLE_APPLICATION_CREDENTIALS env var or default credentials file path.</small></p>
                                </div>
                            </div>

                        <div id="cacheOptionsContainer">
                            <hr>
                            <h5>Cache</h5>
                            <p><small>Wraps the selected provider with a local cache which saves binaries in <code>$JFROG_HOME/artifactory/var/data/artifactory/cache </code> until the max size is reached, then uses LRU (Least Recently Used) for replacement. JFrog recommends this for NFS or Cloud Storage to improve download performance with fast local storage (SSD). Your cache should be sized for 24 hours of traffic, including some overhead. More details <a href="https://jfrog.com/help/r/jfrog-installation-setup-documentation/cached-filesystem-binary-provider" target="_blank">here</a>.</small></p>
                            <div class="input-group">
                                    <input type="checkbox" id="fsUseCacheCheckbox">
                                    <label for="fsUseCacheCheckbox" class="inline-label">Enable Local Cache</label>
                                    
                            </div>
                            <div id="cacheParamsContainer" class="hidden">
                                    <div class="input-group">
                                        <label for="fsCacheDirInput">Cache Directory:</label>
                                        <input type="text" id="fsCacheDirInput" value="cache">
                                        <span class="cache-option-desc">Path relative to Artifactory's data directory (<code>$JFROG_HOME/artifactory/var/data/artifactory</code>) where cached files are stored. Using <code>/</code> first will specify a fully qualified path.</span>
                                </div>
                                    <div class="input-group">
                                        <label for="fsMaxCacheSizeInput">Max Cache Size (GB):</label>
                                        <input type="number" id="fsMaxCacheSizeInput" value="5" placeholder="5GB default">
                                        <span class="cache-option-desc">Total size limit for cached files (Please ensure there is overhead beyond this for the local storage as the cache saves files before deleting old ones). Default is 5GB.</span>
                                </div>
                                    <div class="input-group">
                                        <label for="fsMaxFileSizeLimitInput">Max File Size Limit for Cache (GB, optional):</label>
                                        <input type="number" id="fsMaxFileSizeLimitInput" placeholder="No limit default">
                                        <span class="cache-option-desc">Files larger than this will not be cached. Leave blank for no limit.</span>
                                </div>
                                    <div class="input-group">
                                        <input type="checkbox" id="fsSkipDuringUploadCheckbox">
                                        <label for="fsSkipDuringUploadCheckbox" class="inline-label">Skip Caching During Upload</label>
                                        <span class="cache-option-desc">If checked, files are only cached when downloaded, not when uploaded.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div id="filestoreDetailsContainer" class="flex-aside filestore-aside hidden"> </div>
                </div>
            </div>

            <div id="installStepsSection" class="guidance-section"> <h3>Here are your personalized Installation Steps</h3>
            <div id="installStepsContent">
                <p class="placeholder">Select options in all sections above to generate steps.</p>
            </div>
        </div>

    </div>
`; // end of html template