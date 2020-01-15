const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    initials: {
        type: String,
        uppercase: true
    },
    guesses: Number,
    seconds: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Score', scoreSchema);
