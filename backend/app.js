import express from 'express'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import mysql from 'mysql2'
import multer from 'multer'
import fs from 'fs'
import * as path from 'path'
import * as nodemailer from 'nodemailer'
import * as https from 'https'

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

const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'itdevelopers@wayoeltd.com',
        pass: 'ztkpjdfgxpmvtxyt'
    }
})

const serverOptions = {
    key: fs.readFileSync('../../../../../../../etc/letsencrypt/live/wecithelpdesk.tech/privkey.pem'),
    cert: fs.readFileSync('../../../../../../../etc/letsencrypt/live/wecithelpdesk.tech/fullchain.pem')
}

const httpsServer = https.createServer(serverOptions, app)

// --------------------------------------------------------------------------------

let uploadedFileName
let oldFileName

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../profilePictures/');
    },
    filename: (req, file, cb) => {
        const fileName = Math.floor(Math.random() * 9000000000) + 1000000000;
        cb(null, fileName + path.extname(file.originalname))
        uploadedFileName = fileName + path.extname(file.originalname)
    }
})

const upload = multer({ storage: storage })

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
            return res.status(400).json({ message: dbError })
        }
        if (dbInfo.length > 0) {
            console.log('email exist')
            return res.json({ message: 'email exist' })
        }
        conn.query(query, [firstname, lastname, profilepicture, email, encryptPassword, department, designation], (err, info) => {
            if (err) {
                console.log('error executing query', err)
                return res.status(400).json({ message: dbError })
            }
            if (info.affectedRows === 0) {
                console.log('error adding user')
                return res.status(500).json({ message: 'error adding user' })
            }
            return res.status(201).json({ message: 'user added' })
        })
    })
})

// user login
app.post('/login', (req, res) => {
    const { email, password } = req.body
    const query = 'SELECT * FROM users WHERE email = ?'

    conn.query(query, email, (err, info) => {
        if (err) {
            console.log(dbError, err)
            return res.status(400).json({ message: dbError })
        }
        if (info.length === 0) {
            console.log('user does not exist')
            return res.status(404).json({ message: 'user does not exist' })
        }
        const dbPassword = info[0].password
        const decryptPassowrd = bcrypt.compareSync(password, dbPassword)

        if (!decryptPassowrd) {
            return res.json({ message: 'incorrect password' })
        }

        return res.status(200).json({ message: 'success', info: info[0] })
    })
})

// fetch user
app.get('/getuser/:email', (req, res) => {
    const email = req.params.email
    const query = 'SELECT * FROM users WHERE email = ?'

    conn.query(query, email, (err, info) => {
        if (err) {
            console.log(dbError, err)
            return res.status(400).json({ message: dbError })
        }
        return res.status(200).json({ info: info[0] })
    })
})

// edit user profile
app.post('/saveProfile', (req, res) => {
    const { firstname, lastname, email } = req.body
    const saveQuery = "UPDATE users SET firstname = ?, lastname = ? WHERE email = ?"
    const fetchQuery = "SELECT * FROM users WHERE email = ?"

    conn.query(saveQuery, [firstname, lastname, email], (err, response) => {
        if (err) {
            console.log(dbError, err)
            return res.status(400).json({ message: dbError })
        }
        if (response.affectedRows === 0) {
            return res.status(400).json({ message: 'failed' })
        }
        conn.query(fetchQuery, email, (err2, info) => {
            if (err2) {
                console.log(dbError, err2)
                return res.status(400).json({ message: dbError })
            }
            return res.status(200).json({ info: info[0] })
        })
    })
})

// change user password
app.post('/changePassword', (req, res) => {
    const { email, currentPassword, newPassword } = req.body
    const getPasswordQuery = 'SELECT password FROM users WHERE email = ?'
    const changeQuery = 'UPDATE users SET password = ? WHERE email = ?'
    const fetchQuery = "SELECT * FROM users WHERE email = ?"

    conn.query(getPasswordQuery, email, (err, response) => {
        if (err) {
            console.log(dbError, err)
            return res.status(400).json({ message: dbError })
        }
        const dbPassword = response[0].password
        const decryptPassword = bcrypt.compareSync(currentPassword, dbPassword)

        if (!decryptPassword) {
            return res.json({ message: 'incorrect password' })
        }

        const encryptPassword = bcrypt.hashSync(newPassword, 13)

        conn.query(changeQuery, [encryptPassword, email], (err2, result) => {
            if (err2) {
                console.log(dbError, err2)
                return res.status(400).json({ message: dbError })
            }
            if (result.affectedRows === 0) {
                return res.status(400).json({ message: 'failed' })
            }
            conn.query(fetchQuery, email, (err3, info) => {
                if (err3) {
                    console.log(dbError, err3)
                    return res.status(400).json({ message: dbError })
                }
                return res.status(200).json({ info: info[0] })
            })
        })
    })
})

// upload user picture
app.post('/uploadProfilePicture', upload.single('image'), (req, res) => {
    res.status(200).json({ message: 'File uploaded!' })
})

// upadte user profile on database
app.get('/updateUserProfile/:email', (req, res) => {
    const email = req.params.email
    const query = "UPDATE users SET profilepicture = ? WHERE email = ?"
    const fetchQuery = "SELECT * FROM users WHERE email = ?"

    conn.query(query, [uploadedFileName, email], (err, info) => {
        if (err) {
            console.log(dbError, err)
            return res.status(400).json({ message: dbError })
        }
        if (info.affectedRows === 0) {
            return res.json({ message: 'failed' })
        }
        conn.query(fetchQuery, email, (err2, info) => {
            if (err2) {
                console.log(dbError, err2)
                return res.status(400).json({ message: dbError })
            }
            return res.status(200).json({ info: info[0] })
        })
    })
})

// forgot password
app.post('/forgotPassword', (req, res) => {
    const { email } = req.body
    const query = 'SELECT * FROM users WHERE email = ?'
    const saveCodeQuery = 'UPDATE users SET code = ? WHERE email = ?'
    const code = Math.floor(Math.random() * 9000) + 1000;

    conn.query(query, email, (error, info) => {
        if (error) {
            console.log('Error executing query', error)
            return res.json({ message: dbError })
        }

        if (info.length === 0) {
            console.log("user doesn't exist")
            return res.status(404).json({ message: "user doesn't exist" })
        }

        const messageBody = `
                <div style="text-align: left;">
                    <h1 style="color: #39b54a;">Reset Code</h1>
                    <p style="margin-bottom: 0px; font-size: 14px;">
                    Hello, <br></br>
                    Use the code below to reset your password\n
                    <h1 style="color: #39b54a; letter-spacing: 2px;">${code}</h1>
                    </p>
                    <p style="font-size: 14px;">If you didn't make this request, kindly ignore this email.</P>
                    <span style="font-size: 12px; opacity: .4">
                        WEC Care
                    </span>
                </div>
                `

        const mailOptions = {
            from: 'WEC Care <itdevelopers@wayoeltd.com>',
            to: `${email}`,
            subject: 'Reset Code',
            html: messageBody
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log('Error sending mail', err)
                return res.status(500).json({ message: 'Error sending Mail' })
            }
            console.log('Email Sent', info.response)
            conn.query(saveCodeQuery, [code, email], (dbErr, dbPass) => {
                if (dbErr) {
                    console.log('Error executing query', dbErr)
                    res.json({ message: dbError })
                    return
                }
                return res.status(201).json({ message: 'success' })
            })
        })

    })
})

app.get('/verifyCode/:email/:code', (req, res) => {
    const email = req.params.email
    const code = req.params.code
    const query = 'SELECT code FROM users WHERE email = ?'

    conn.query(query, email, (err, info) => {
        if (err) {
            console.log('Error executing query', err)
            res.json({ message: dbError })
            return
        }
        if (info[0].code !== code) {
            console.log('Codes does not match')
            return res.json({ message: 'incorrect code' })
        }
        return res.json({ message: 'success' })
    })
})

app.post('/resetPassword', (req, res) => {
    const { email, password } = req.body
    const query = 'UPDATE users SET password = ? WHERE email = ?'

    const encryptPassword = bcrypt.hashSync(password, 13)

    conn.query(query, [encryptPassword, email], (err, info) => {
        if (err) {
            console.log('Error executing query', err)
            return res.json({ message: dbError })
        }
        if (info.affectedRows === 0) {
            console.log('error changing pasword')
            return res.json({ message: 'failed' })
        }
        return res.json({ message: 'Password changed' })
    })
})

// -------------------------------------------------------------------------------------

// fetch user cards amount
app.get('/getCardAmount/:email', (req, res) => {
    const email = req.params.email
    const pendingquery = "SELECT COUNT(*) as pendingCards FROM cards WHERE status = 'Pending' AND observerEmail = ?;"
    const completedquery = "SELECT COUNT(*) as completedCards FROM cards WHERE status = 'Completed' AND observerEmail = ?;"
    const uncompletedquery = "SELECT COUNT(*) as uncompletedCards FROM cards WHERE status = 'Uncompleted' AND observerEmail = ?"

    conn.query(pendingquery, email, (err, pending) => {
        if (err) {
            console.log(dbError, err)
            return res.status(400).json({ message: dbError })
        }
        if (pending.length === 0) {
            return res.json({ message: 'empty' })
        }
        conn.query(completedquery, email, (err2, completed) => {
            if (err2) {
                console.log(dbError, err2)
                return res.status(400).json({ message: dbError })
            }
            if (completed.length === 0) {
                return res.json({ message: 'empty' })
            }
            conn.query(uncompletedquery, email, (err3, uncompleted) => {
                if (err3) {
                    console.log(dbError, err3)
                    return res.status(400).json({ message: dbError })
                }
                if (uncompleted.length === 0) {
                    return res.json({ message: 'empty' })
                }

                const pendingCards = pending[0].pendingCards
                const completedCards = completed[0].completedCards
                const uncompletedCards = uncompleted[0].uncompletedCards

                return res.json({ pendingCards, completedCards, uncompletedCards })
            })
        })
    })
})

app.get('/departments', (req, res) => {
    const query = "SELECT * FROM departments"
    conn.query(query, (err, info) => {
        if (err) {
            console.log(dbError, err)
            return res.status(400).json({ message: dbError })
        }
        return res.json({ info })
    })
})

// fetch pending cards
app.get('/getPendingCards/:email', (req, res) => {
    const email = req.params.email
    const pendingquery = "SELECT * FROM cards WHERE status = 'Pending' AND observerEmail = ?;"

    conn.query(pendingquery, email, (err, pending) => {
        if (err) {
            console.log(dbError, err)
            return res.status(400).json({ message: dbError })
        }
        if (pending.length === 0) {
            return res.json({ message: 'empty' })
        }

        const pendingCards = pending

        return res.json({ pendingCards })
    })
})

// fetch completed cards
app.get('/getCompletedCards/:email', (req, res) => {
    const email = req.params.email
    const completedquery = "SELECT * FROM cards WHERE status = 'Completed' AND observerEmail = ?;"


    conn.query(completedquery, email, (err, completed) => {
        if (err) {
            console.log(dbError, err)
            return res.status(400).json({ message: dbError })
        }
        if (completed.length === 0) {
            return res.json({ message: 'empty' })
        }

        const completedCards = completed

        return res.json({ completedCards })
    })
})

// fetch uncompleted cards
app.get('/getUncompletedCards/:email', (req, res) => {
    const email = req.params.email
    const uncompletedquery = "SELECT * FROM cards WHERE status = 'Uncompleted' AND observerEmail = ?;"

    conn.query(uncompletedquery, email, (err, uncompleted) => {
        if (err) {
            console.log(dbError, err)
            return res.status(400).json({ message: dbError })
        }
        if (uncompleted.length === 0) {
            return res.json({ message: 'empty' })
        }

        const uncompletedCards = uncompleted

        return res.json({ uncompletedCards })
    })
})

// get recent cards
app.get('/getRecentCards/:email', (req, res) => {
    const email = req.params.email

    const query = "SELECT * FROM cards WHERE observerEmail = ? ORDER BY dateAdded DESC LIMIT 3"

    conn.query(query, email, (err, info) => {
        if (err) {
            console.log(dbError, err)
            return res.status(400).json({ message: dbError })
        }

        if (info.length === 0) {
            return res.json({ message: 'empty' })
        }

        const recentCards = info

        return res.status(200).json({ recentCards })
    })
})

// submit card
app.post('/submitCard', (req, res) => {
    const { actionsTaken, assetsEquipment, cardID, cardTitle, condition, description, environmental, observationType, observerCountry, observerDepartment, observerDesignation, observerEmail, observerLocation, observerFirstname, observerLastname, peopleActs, procedureSystem, quality, security, status, suggestion, } = req.body
    const query = "INSERT INTO `cards` (`cardID`,`cardTitle`,`observerFirstname`,`observerLastname`,`observerEmail`,`observerDepartment`,`observerDesignation`,`observerCountry`,`observerLocation`,`observationType`,`peopleActs`,`condition`,`environmental`,`assetsEquipment`,`procedureSystem`,`quality`,`security`,`description`,`actionsTaken`,`suggestion`,`status`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"

    conn.query(query, [cardID, cardTitle, observerFirstname, observerLastname, observerEmail, observerDepartment, observerDesignation, observerCountry, observerLocation, observationType, `${peopleActs}`, condition, environmental, assetsEquipment, procedureSystem, quality, security, description, actionsTaken, suggestion, status], (err, info) => {
        if (err) {
            console.log(dbError, err)
            return res.status(400).json({ message: dbError })
        }
        if (info.affectedRows === 0) {
            console.log('an error occured')
            return res.status(400).json({ message: 'failed' })
        }

        return res.status(201).json({ message: 'success!' })
    })
})

// ----------------------------------------------------------------------------------------

const port = process.env.PORT

// listen
httpsServer.listen(port, '0.0.0.0', () => {
    console.log(`listening on port ${port}`)
})