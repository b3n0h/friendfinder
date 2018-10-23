const express = require('express')
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

require('./app/routing/htmlRoutes.js')(app)
require('./app/routing/apiRoutes.js')(app)

app.listen(3005, () => {console.log('http://localhost:3005')})