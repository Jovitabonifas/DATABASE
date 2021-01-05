var express = require('express')
var mysql = require('mysql')
var app=express()

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'sampledb'
});

connection.connect(function(err) {
    // in case of error
    if(err) throw err;

    connection.query("insert  into sampletable(ID,Name,password)values(5,'malini','yesmal')",function(err,result){

        if(err)throw err;
        console.log("entry added")
    })




});

