const express = require('express')
const { join } = require('path')
const axios = require('axios')
const cheero = require('cheerio')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true}))
app.use(express.join())

// require('mongoose').connect('mongdb://localhost/_db', { })
