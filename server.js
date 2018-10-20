const express = require('express')
const app = express()
const path = require('path')

require('./app/routing/htmlRoutes.js')(app)

app.listen(3005, () => {console.log('http://localhost:3005')})