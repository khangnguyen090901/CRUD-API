const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const docs = require('./docs.js')
const connectDB = require('./server/database/connection');

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));



//log requests
app.use(morgan('tiny'));

app.use(morgan("dev"));

//parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}))

//set view engine
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

// load routees
app.use('/',require('./server/routes/router'))

app.listen(3000,()=>{console.log("Server is running on http://localhost:3000")})