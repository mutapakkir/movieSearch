require('dotenv').config()
const express = require('express')
const cors = require('cors')
const movieRouter = require('./routes/movie-routes')

const app = express()
const port = process.env.port

app.use(cors())
app.use(express.json())
app.use('/api/movies',movieRouter)

app.listen(port, ()=>{
    console.log(`Server run at http://localhost:${port}/api/movies`);
    
})