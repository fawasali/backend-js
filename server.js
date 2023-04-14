const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const port = 3200

const x = require('./db.config')

//point utama
const userEndpoint = require('./routes/users')

const app = express()
app.use(cors())
app.use(express.json())  

//point utama
app.use('/', userEndpoint)

app.listen(port, () => console.log(`running server on port ${port}`))