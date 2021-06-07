const db = require('../db')
const admin = require('../notify')

class UserController {
    async createUser(req, res) {
        const {name, surname} = req.body
        const newPerson = await db.query('INSERT INTO person (name, surname) values ($1, $2) RETURNING *', [name, surname])
        res.set({'Access-Control-Allow-Origin': '*'})
        res.json(newPerson.rows[0])
    }
    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM person')
        res.set({'Access-Control-Allow-Origin': '*'})
        res.json(users.rows)
    }
    async getOneUser(req, res) {
        const registrationToken = 'cNaqNqNCRByzW-vNX4Iw7i:APA91bFIX8ZLLzpUrAal8gz1Ody6K-Ii9a0ZlNJmNMdhvO6WZlayIV_wg' +
            'HiBMKOHNjng85U_Cs-sleRoljJ3ASDgkTIKRJEFfneN0quTnfjg4g99FuTBtB4tY8Qinoiub4BKzVVpyCFW';

        const message = {
            notification: {
                title: '$FooCorp up 1.43% on the day',
                body: '$FooCorp gained 11.80 points to close at 835.67, up 1.43% on the day.'
            },
            android: {
                notification: {
                    icon: 'stock_ticker_update',
                    color: '#7e55c3'
                }
            },
            token: registrationToken
        };

        admin.messaging().send(message)
            .then((response) => {
                // Response is a message ID string.
                console.log('Successfully sent message:', response);
            })
            .catch((error) => {
                console.log('Error sending message:', error);
            });
        res.set({'Access-Control-Allow-Origin': '*'})
        res.json('sent')
    }
    async updateUser(req, res) {

    }
    async deleteUser(req, res) {

    }
}

module.exports = new UserController()