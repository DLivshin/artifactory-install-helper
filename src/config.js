// ========================================================================
// Data Structures for sizing
// ========================================================================

export const vmSpecsData = [ // Based on Active Clients
    { range: '0-20', cpu: '4 core CPU', ram: '6 GB' },
    { range: '21-100', cpu: '6 core CPU', ram: '12 GB' },
    { range: '101-200', cpu: '8 core CPU', ram: '18 GB' },
    { range: '200+', cpu: 'Consult JFrog Sales/Support', ram: 'Consult JFrog Sales/Support' }
];

export const dbSpecsData = { // Mapped to T-Shirt Sizes
    xsmall: { name: 'XSmall', memory: '8 GB', cpu: '2', connections: 100, iops: '3k', throughput: '250MB/s', disk: '~30%' },
    small:  { name: 'Small', memory: '16 GB', cpu: '4', connections: 100, iops: '4k', throughput: '400MB/s', disk: '~30%' },
    medium: { name: 'Medium', memory: '32 GB', cpu: '8', connections: 200, iops: '6k', throughput: '600MB/s', disk: '~30%' },
    large:  { name: 'Large', memory: '64 GB', cpu: '16', connections: 600, iops: '10k', throughput: '800MB/s', disk: '~30%' },
    xlarge: { name: 'XLarge', memory: '128 GB', cpu: '32', connections: 2000, iops: '12k', throughput: '1000MB/s', disk: '~30%' },
    '2xlarge':{ name: '2XLarge', memory: '256 GB', cpu: '64', connections: 5000, iops: '20k', throughput: '1500MB/s', disk: '~30%' },
        consult: { name: 'Custom/Consult', memory: 'Consult JFrog', cpu: 'Consult JFrog', connections: 0, iops: 'Consult', throughput: 'Consult', disk: 'Consult' }
};

export function getTshirtSizeFromClientRange(range) {
    switch(range) {
        case '0-20': return 'xsmall';
        case '21-100': return 'small';
        case '101-200': return 'medium';
        case '200+': return 'large'; 
        default: return 'small';
    }
};

export const tuningParamsData = { // DB Pool and Max Threads based on T-Shirt Size
    xsmall: { artifactoryMaxThreads: 200, accessMaxThreads: 100, artidbPool: 100, otherdbPool: 50 },
    small:  { artifactoryMaxThreads: 200, accessMaxThreads: 100, artidbPool: 100, otherdbPool: 100 },
    medium: { artifactoryMaxThreads: 600, accessMaxThreads: 150, artidbPool: 200, otherdbPool: 100 },
    large:  { artifactoryMaxThreads: 800, accessMaxThreads: 200, artidbPool: 300, otherdbPool: 100 },
    xlarge: { artifactoryMaxThreads: 2048, accessMaxThreads: 300, artidbPool: 600, otherdbPool: 150 },
    '2xlarge':{ artifactoryMaxThreads: 2048, accessMaxThreads: 300, artidbPool: 1000, otherdbPool: 150 },
    consult: { artifactoryMaxThreads: 2048, accessMaxThreads: 300, artidbPool: 600, otherdbPool: 150 } // Use xlarge as base for consult
};

// ========================================================================
// DB Details Variable
// ========================================================================

export const dbDetails = {
    postgresql: { 
        versions: "16.x (from Artifactory 7.98), 15.x (from 7.68), 14.x (from 7.68), 13.x",
        prerequisites:
        `<h4>PostgreSQL Prerequisite Setup </h4>
        <p>On your Postgres instance run the following commands:</p>
        <pre><button class="copy-button" title="Copy SQL">Copy</button><code>CREATE USER <span class="db-user-placeholder">artifactory</span> WITH PASSWORD '<span class="db-pass-placeholder">password</span>';\nCREATE DATABASE <span class="db-name-placeholder">artifactory</span> WITH OWNER=<span class="db-user-placeholder">artifactory</span> ENCODING='UTF8';\nGRANT ALL PRIVILEGES ON DATABASE <span class="db-name-placeholder">artifactory</span> TO <span class="db-user-placeholder">artifactory</span>;</code></pre>
        <hr>
        <p><strong>For self-managed PostgreSQL instances (not RDS):</strong><br>
        To allow remote connections, add the following to your <code>pg_hba.conf</code> file:</p>
        <pre><button class="copy-button" title="Copy Config">Copy</button><code>host  <span class="db-name-placeholder">artifactory</span>  <span class="db-user-placeholder">artifactory</span>  &lt;artifactory_ip_cidr&gt;   md5</code></pre>
        <p>And ensure <code>listen_addresses = '*'</code> (or specific IPs) is set in <code>postgresql.conf</code>. Restart PostgreSQL after these changes.</p>
        <p><span class="recommendation">Reference: </span><a href="https://jfrog.com/help/r/jfrog-installation-setup-documentation/create-the-artifactory-postgresql-database" target="_blank">Artifactory PostgreSQL Setup Guide</a></p>

        <hr>
        <p><strong>Securing the Connection with SSL:</strong><br>
        It is possible to secure the connection between Artifactory and PostgreSQL using TLS/SSL.</p>
        <p>To do so you will need the CA cert from your database, saved onto your Artifactory machine. <strong>For AWS RDS, SSL is typically enabled by default</strong>. Download the appropriate AWS RDS CA certificate from the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html#UsingWithRDS.SSL.CertificatesDownload" target="_blank">AWS documentation</a> to use as the <code>sslrootcert</code>.
        <p>It will also be necessary to update the database URL snippet we generate below in the <code>system.yaml</code> with:</p>
        <pre><button class="copy-button" title="Copy YAML Snippet">Copy</button><code>url: 'jdbc:postgresql://<span class="db-host-placeholder">your_db_host</span>:<span class="db-port-placeholder">5432</span>/<span class="db-name-placeholder">artifactory</span>?sslmode=verify-full&sslrootcert=/path/to/your/server_or_ca_certificate.pem'</code></pre>

        <p>For more details, see the <a href="https://jfrog.com/help/r/jfrog-installation-setup-documentation/enable-tls-encryption-for-postgresql" target="_blank">PostgreSQL TLS Documentation</a>.</p>`,
        driver:``
    },
    mysql: { 
        versions: "8.x (InnoDB engine required)",
        prerequisites: `<h4>MySQL Prerequisite Setup</h4>
        <p>Run the following SQL commands:</p><pre><button class="copy-button" title="Copy SQL">Copy</button><code>CREATE DATABASE <span class="db-name-placeholder">artdb</span> CHARACTER SET utf8 COLLATE utf8_bin;\nCREATE USER '<span class="db-user-placeholder">artifactory</span>'@'%' IDENTIFIED BY '<span class="db-pass-placeholder">password</span>';\nGRANT ALL on <span class="db-name-placeholder">artdb</span>.* TO '<span class="db-user-placeholder">artifactory</span>'@'%';\nGRANT SUPER ON *.* TO '<span class="db-user-placeholder">artifactory</span>'@'%';\nFLUSH PRIVILEGES;</code></pre>
        <p><strong>Important:</strong> Ensure case-sensitive collation (<code>utf8_bin</code> is recommended). UTF8MB4 is not supported.</p>
        <p>For remote connectivity, edit <code>my.cnf</code> (or similar) and set <code>bind-address = 0.0.0.0</code> (or specific IPs). Restart MySQL after changes.</p>
        <p><a href="https://jfrog.com/help/r/jfrog-installation-setup-documentation/create-the-artifactory-mysql-database" target="_blank">Artifactory MySQL Setup Guide</a></p>`,
        driver:`true`
    },
    mariadb: { 
        versions: "10.5, 10.6", 
        prerequisites: `<h4>MariaDB Prerequisite Setup</h4>
            <p>Artifactory provides a script that will execute the SQL commands you need to create your MariaDB database. You can find the script in $JFROG_HOME/artifactory/app/misc/db/createdb/createdb_mariadb.sql. You should review the script and modify it as needed to correspond to your specific environment or :-</p> 
            <p>Copy and run the following SQL commands:</p>
            <pre><button class="copy-button" title="Copy SQL">Copy</button><code>CREATE DATABASE <span class="db-name-placeholder">artdb</span> CHARACTER SET utf8 COLLATE utf8_bin;\nGRANT ALL on <span class="db-name-placeholder">artdb</span>.* TO '<span class="db-user-placeholder">artifactory</span>'@'%' IDENTIFIED BY '<span class="db-pass-placeholder">password</span>';\nGRANT SUPER ON *.* TO '<span class="db-user-placeholder">artifactory</span>'@'%';\nFLUSH PRIVILEGES;</code></pre>
            <p><strong>Important:</strong> Ensure case-sensitive collation (<code>utf8_bin</code> is recommended).</p>
            <p><a href="https://jfrog.com/help/r/jfrog-installation-setup-documentation/create-the-artifactory-mariadb-database" target="_blank">Artifactory MariaDB Setup Guide</a></p>`, 
        driver:`true` 
    },
    mssql: { 
        versions: "2012 and later",
        prerequisites: `<h4>Microsoft SQL Server Prerequisite Setup</h4>
            <p>Using SQL Server Management Studio (SSMS):</p>
            <ol>
                <li>Create a new Login named '<span class="db-user-placeholder">artifactory</span>' with SQL Server authentication and set a password.</li>
                <li>Create a new Database named '<span class="db-name-placeholder">artifactory</span>'.</li>
                <li>Set the Owner of the '<span class="db-name-placeholder">artifactory</span>' database to the '<span class="db-user-placeholder">artifactory</span>' login created in step 1.</li>
                <li>In the Database Properties -> Options page, set the <strong>Collation</strong> to <code>Latin1_General_CS_AI</code> (Case-Sensitive).</li>
                <li>Ensure the Artifactory server(s) can connect (check firewall, SQL Server network configuration for TCP/IP).</li>
            </ol>
            <p><a href="https://jfrog.com/help/r/jfrog-installation-setup-documentation/create-the-artifactory-microsoft-sql-server-database" target="_blank">Artifactory MS SQL Setup Guide</a></p>`,
            driver:`true`
    },
    oracle: { 
        versions: "19c",
        prerequisites: `<h4>Oracle Prerequisite Setup</h4>
                    <p>You will have to create a DB and provide us with the DB details. Usually it’s easiest to grant full access, if this is not possible then Run the following SQL commands:</p><pre><button class="copy-button" title="Copy SQL">Copy</button><code>CREATE USER <span class="db-user-placeholder">artifactory</span> IDENTIFIED BY <span class="db-pass-placeholder">password</span> \nDEFAULT TABLESPACE "USERS" \nTEMPORARY TABLESPACE "TEMP";\n\nGRANT "CONNECT" TO <span class="db-user-placeholder">artifactory</span>;\nGRANT "RESOURCE" TO <span class="db-user-placeholder">artifactory</span>; \nGRANT CREATE SESSION TO <span class="db-user-placeholder">artifactory</span>; \nGRANT CREATE SEQUENCE TO <span class="db-user-placeholder">artifactory</span>; \nALTER USER <span class="db-user-placeholder">artifactory</span> QUOTA UNLIMITED ON USERS;</code></pre><p>Ensure the database character set supports UTF8.</p><p><a href="https://jfrog.com/help/r/jfrog-installation-setup-documentation/create-the-artifactory-oracle-database" target="_blank">Artifactory Oracle Setup Guide</a></p>`,
        driver:`true`
    }
};

// ========================================================================
// Filestore Details Variable
// ========================================================================

export const cloudStorageTypes = ['s3-storage-v3-direct', 'azure-blob-storage-v2-direct', 'google-storage-v2-direct'];

export const filestoreDetails = {
    'file-system': { description: `The most basic filestore configuration. Uses a local directory or a mounted network file system (NFS). Simple to set up but performance depends heavily on the underlying storage speed and IOPS. Default for single-node.<p><a href="https://jfrog.com/help/r/jfrog-installation-setup-documentation/file-system-binary-provider-template-configuration" target="_blank">Full guide for file-system</a></p>` },
    'cluster-file-system': { description: `The default for HA set ups. Each node has its own local filestore (just like in the file-system binary provider) and is also connected to all other cluster nodes and can access their storage. Every binary is saved in 2 different nodes by default (Redundancy 2) <p><a href="https://jfrog.com/help/r/jfrog-installation-setup-documentation/configure-sharding-for-ha-cluster" target="_blank">Full guide for cluster-file-system</a></p>` },
    's3-storage-v3-direct': { description: `Uses Amazon S3 (or S3-compatible storage, <b>for enterprise customers only</b>) as the primary binary storage. Leverages the scalability, durability, and cost-effectiveness of S3. Requires AWS credentials and bucket configuration. Supports direct download optimizations.<a href="https://jfrog.com/help/r/jfrog-installation-setup-documentation/configure-artifactory-to-use-s3-storage" target="_blank">Full JFrog S3 Documentation.</a>` },
    'azure-blob-storage-v2-direct': { description: `Uses Azure Blob Storage as the primary binary storage. Provides scalability and durability benefits similar to S3 within the Azure ecosystem. Requires Azure storage account details. <a href="https://jfrog.com/help/r/jfrog-installation-setup-documentation/azure-blob-storage-v2-binary-provider" target="_blank">Full JFrog Azure Blob Storage Documentation.</a>` },
    'google-storage-v2-direct': { description: `Uses Google Cloud Storage (GCS) as the primary binary storage. Offers scalability and integration within the Google Cloud Platform. Requires GCS credentials and bucket configuration <a href="https://jfrog.com/help/r/jfrog-installation-setup-documentation/google-storage-binary-provider-native-client-template" target="_blank">Full JFrog Google Cloud Storage Documentation.</a>` }
};