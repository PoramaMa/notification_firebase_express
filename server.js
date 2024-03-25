const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const FCM = require('fcm-node');
require('dotenv').config();
const fcm = new FCM(process.env.GOOGLE_FCM_SERVER_KEY);
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

class FirebaseMessaging {
    constructor() {
        this.message = {
            notification: {
                title: "title",
                body: "body"
            },
            to: "f12kacbpv1s26q56PH85Ih:APA91bHasXLCn5EtXYBn_blZAHpRs1AltcOYvEVj2Yu4ZfD0r9gr9GB1DZUeaJ_O5AGByhaSlNiDYs8yiYEBhNDHpxtkh3-cYqiFCDFKXiESbf39ZTS3DfPefwyS7BxAIQRJ805-Q_Tj"
        }
    }
    async sendMessage() {
        fcm.send(this.message, function (err, response) {
            if (err) {
                console.log("============================== Something has gone wrong! ==============================");
            } else {
                console.log("============================== Successfully sent with response: ", response);
            }
        });
    }
}
module.exports = FirebaseMessaging
const firebaseMessaging = new FirebaseMessaging();
firebaseMessaging.sendMessage();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT = 3145, () => {
    console.log(`Server running on port ${PORT}`);
});