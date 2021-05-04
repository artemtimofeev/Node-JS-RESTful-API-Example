const express = require('express')
const userRouter = require('./routes/user.routes')

const https = require("https");
const http = require('http');
const fs = require( "fs" );
const cors = require('cors');

const privateKey  = fs.readFileSync('sslcert/private.key', 'utf8');
const certificate = fs.readFileSync('sslcert/certificate.crt', 'utf8');

const credentials = {key: privateKey, cert: certificate};

const app = express()

app.use(cors());
app.use(express.json())
app.use('/api', userRouter)

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
httpsServer.listen(443);
