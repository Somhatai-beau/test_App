const express = require('express')
const cors = require('cors')
const ejs = require('ejs')

const mysql = require('mysql');
const expressSession = require('express-session')
const flash = require('connect-flash')
const path = require('path');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const dbConnection = require('./database');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.urlencoded({extended:false}));

// Controllers
const indexController = require('./controllers/indexController')
const loginController = require('./controllers/loginController')
const servicesController = require('./controllers/servicesController')
const openController = require('./controllers/openController')
const weatherController = require('./controllers/weatherController')
const parkingController = require('./controllers/parkingController')
const userController = require('./controllers/userController')
const adminController = require('./controllers/adminController')
const adduserController = require('./controllers/adduserController')
const edituserController = require('./controllers/edituserController')
const report_serviceController = require('./controllers/report_serviceController')
const report_weatherController = require('./controllers/report_weatherController')
const report_parkingController = require('./controllers/report_parkingController')
const report_naviController = require('./controllers/report_naviController')
const report_statusController = require('./controllers/report_statusController')
const report_chatController = require('./controllers/report_chatController')
const report_logController = require('./controllers/report_logController')


/*const connection = mysql.createConnection({
    host: '45.154.25.214',
    user: 'mkss_db1',
    password: '@dminMK55db',
    database: 'gcc-super-app'
});

connection.connect((err) => {
    if (err) {
        console.log('Error  MySQL database = ' ,err)
        return;
    }
    console.log('MySQL successfuly connect');
})*/

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(flash())

// SET OUR VIEWS AND VIEW ENGINE
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');


app.get('/', indexController)
app.get('/login', loginController)
app.get('/services', servicesController)
app.get('/open', openController)
app.get('/weather', weatherController)
app.get('/parking', parkingController)
app.get('/user', userController)
app.get('/admin', adminController)
app.get('/adduser', adduserController)
app.get('/edituser', edituserController)
app.get('/report_service', report_serviceController)
app.get('/report_weather', report_weatherController)
app.get('/report_parking', report_parkingController)
app.get('/report_navi', report_naviController)
app.get('/report_status', report_statusController)
app.get('/report_chat', report_chatController)
app.get('/report_log', report_logController)
/*app.use(expressSession({
    secret: "node secret"
}))
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId
    next()
})*/


app.listen(4000, () => console.log('server listening on port 4000'));