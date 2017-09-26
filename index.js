const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')


// MODELS
require('./models/Item')
const mongoURI = 'mongodb://admin:password@ds149844.mlab.com:49844/jetspree_test'
mongoose.connect(mongoURI)


// INITIALIZE APP
const app = express();


// BODYPARSER
app.use(bodyParser.json());

require('./routes/itemsRoutes')(app)


const PORT = process.env.PORT || 3000
const message = `App listening to PORT ${PORT}`

app.listen(PORT, console.log(message))
