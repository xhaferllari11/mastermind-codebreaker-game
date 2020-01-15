const mongoose = require('mongoose');

// need to change db to my own on heroku
mongoose.connect('mongodb://localhost/mastermind', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to db')
});