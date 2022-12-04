const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pickleS123$',
    database: 'notes_app'
});

app.get('/', (req, res) => {
    res.render('home.ejs');
});