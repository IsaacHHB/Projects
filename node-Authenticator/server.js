const express = require('express')
const app = express()
const connectDB = require('./db')

const PORT = 3000

connectDB()

app.use(express.json())

app.use('/api/Auth',require('./Auth/Route'));

const server = app.listen(PORT, () => console.log(`server connected to port ${PORT}`))

process.on('unhandledRejection', err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
})