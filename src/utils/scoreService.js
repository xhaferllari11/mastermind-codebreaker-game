const url = '/api/scores';

function index() {
    return fetch(url).then(res => res.json());
}

function create(highScore) {
    return fetch('/api/scores', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(highScore),
    }).then(response => response.json());
}

module.exports = {
    index,
    create
}