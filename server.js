const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
// Import the controller file
const trackRouter = require('./controllers/tracks')
const cors = require('cors')
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(express.json())

// Routes go here
// Add the trackRouter to the `/tracks` route
app.use('/tracks', trackRouter)
app.use(cors({ origin: 'http://localhost:5173' }))
app.listen(3000, () => {
  console.log('The express app is ready!')
})
