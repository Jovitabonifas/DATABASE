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
    if(err){
        console.log("Error");
        
    }else{
        console.log('connected');
    }
});
app.get('/',function(req,res){
    
    connection.query("select * from sampletable", function(error,rows,fields){
if(error){
    console.log('error in query')
}else {
    console.log ('successful query\n')
    console.log(rows[0].Name)
    res.send('hello ' + rows[0].Name)
    
    
}
    })

    
})

/*app.get('/insert',function(req,res){

    connection.query("insert value into sampletable(ID,Name,password)values(5,'malini','yesmal')",function(err,result){

        if(err)throw err;
        console.log("entry added")
    })
})*/

app.listen(1111)