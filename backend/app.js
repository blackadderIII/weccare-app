import express from 'express'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import mysql from 'mysql2'
import * as nodemailer from 'nodemailer'

dotenv.config()
const app = express()
app.use(express.json())

const conn = mysql.createPool({
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASS,
    database: process.env.MYSQLDATABASE
})

const dbError = 'error executing query'

// test api
app.get('/test', (req, res) => {
    return res.send('Success')
})

// create user
app.post('/createUser', (req, res) => {
    const { firstname, lastname, profilepicture, email, password, department, designation } = req.body
    const query = 'INSERT INTO `carecard`.`users`(`firstname`,`lastname`,`profilepicture`,`email`,`password`,`department`,`designation`) VALUES (?, ?, ?, ?, ?, ?, ?);'
    const checkQuery = `SELECT * FROM users WHERE email = ?`
    const encryptPassword = bcrypt.hashSync(password, 13)

    conn.query(checkQuery, email, (dbErr, dbInfo) => {
        if (dbErr) {
            console.log('error executing query', dbErr)
            return res.json({ message: dbError })
        }
        if (dbInfo.length > 0) {
            console.log('email exist')
            return res.json({ message: 'email exist' })
        }
        conn.query(query, [firstname, lastname, profilepicture, email, encryptPassword, department, designation], (err, info) => {
            if (err) {
                console.log('error executing query', err)
                return res.json({ message: dbError })
            }
            if (info.affectedRows === 0) {
                console.log('error adding user')
                return res.json({ message: 'error adding user' })
            }
            return res.status(201).json({ message: 'user added' })
        })
    })
})

// --------------------------------------------

const port = process.env.PORT

// listen
app.listen(port, '0.0.0.0', () => {
    console.log(`listening on port ${port}`)
})