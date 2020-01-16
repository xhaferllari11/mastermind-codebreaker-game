const Score = require('../../models/score')

function scoreCreate(req, res, next) {
    Score.create(req.body, function(e,score){
        if (e) console.log(e);
        res.status(200).json(score);
    });
};

function scoreIndex(req, res) {
    Score.find({})
    .sort('guesses')
    .sort('seconds')
    .exec(function(e,scores){
        if (e) console.log(e);
        res.status(201).json(scores);
    })
}

module.exports = {
    scoreCreate,
    scoreIndex
}