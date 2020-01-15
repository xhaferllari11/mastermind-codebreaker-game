const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname,'build','favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// API routes here


// Client requests
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname,'build','index.html'));

})


// change to port 3001 bc react on 3000
const port = process.env.PORT || 3001;

app.listen(port, function(){
    console.log(`express on port ${port}`)
})



