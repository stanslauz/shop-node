const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const adminData = require('./routes/admin');
const shopRoute = require('./routes/shop');

const path = require('path');
const exp = require('constants');
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminData.routes);

app.use(shopRoute);

app.use((req, res, next) => {

    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
});

app.listen(3000);