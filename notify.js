const admin = require("firebase-admin");
const fs = require("fs");

const serviceAccount = JSON.parse(fs.readFileSync("supple-nature-274421-firebase-adminsdk-u2fsd-0427563775.json", "utf-8"));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;