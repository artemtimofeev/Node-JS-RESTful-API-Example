const express = require('express')
const userRouter = require('./routes/user.routes')

const https = require( "https" );
const fs = require( "fs" );

const PORT = process.env.PORT || 80

const app = express()

app.use(express.json())
app.use('/api', userRouter)


httpsOptions = {
    key: fs.readFileSync("private.key"), // путь к ключу
    cert: fs.readFileSync("certificate.crt") // путь к сертификату
}

https.createServer(httpsOptions, app).listen(80);
