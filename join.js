var express = require('express')
var mysql = require('mysql')
var app=express()

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'myownpractice'
});