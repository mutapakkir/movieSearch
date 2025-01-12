require('dotenv').config()
const axios = require('axios')
//const { Module } = require('module')

const tmdbAPI = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    headers :{
        accept : 'application/json',
        Authorization :`Bearer ${process.env.TMDB_BEARER}`
    }
})
module.exports = tmdbAPI