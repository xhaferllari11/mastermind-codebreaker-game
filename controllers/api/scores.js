const Score = require('../../models/score')

function scoreCreate(req, res, next) {
    console.log(req.body);
    res.send('cool');
}

function scoreIndex(req, res) {
    res.send('alban')
}

module.exports = {
    scoreCreate,
    scoreIndex
}