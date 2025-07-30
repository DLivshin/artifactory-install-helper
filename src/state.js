// src/state.js

// ========================================================================
// State Management Variable Defaults
// ========================================================================

export let selections = {
    installType: '',
    hostName: '',
    installMode: 'singleNode',
    userRange: '0-20',
    tShirtSize: 'xsmall',
    vmSpec: null,
    dbSpec: null,
    artidbPool: null,
    otherdbPool: null,
    artifactoryMaxThreads: null,
    accessMaxThreads: null,
    dbChoice: 'postgresql',
    dbHost: 'your_db_host_or_ip',
    dbPort: '5432',
    dbName: 'artifactory',
    dbUser: 'artifactory',
    dbPassword: 'password',
    filestoreChoice: 'file-system',
    fsFileStoreDir: '',
    fsUseCache: false,
    fsCacheDir: 'cache',
    fsMaxCacheSize: '5',
    fsMaxFileSizeLimit: '',
    fsSkipDuringUpload: false,
    s3BucketName: '',
    s3Endpoint: 's3.amazonaws.com',
    s3PathPrefix: '',
    s3Region: '',
    s3AuthMethod: 'iam',
    s3Identity: '',
    s3Credential: '',
    azureAccountName: '',
    azureAccountKey: '',
    azureContainerName: '',
    azureEndpoint: 'blob.core.windows.net',
    gcsBucketName: '',
    gcsPathPrefix: '',
    gcsUseInstanceCredentials: true
};