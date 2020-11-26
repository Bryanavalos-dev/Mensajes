const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const Myconnection = require('express-myconnection');
const bodyParser = require('body-parser');


const app = express();

//importing routes
const customerRoutes = require('./routes/mensaje');


//setttings 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//middlewares
app.use(morgan('dev'));
app.use(Myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'mensajes',

}, 'single'));
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/', customerRoutes);


//staticfiles


//STARTING THE SERVER
app.listen(app.get('port'), () => {
    console.log('Server is running on port ', app.get('port'));
})