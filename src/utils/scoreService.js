const url = '/api/scores';

function index(){
    return fetch(url).then(res => res.json());
}

function create(){
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: 2
    }
    return 2;
}

module.exports = {
    index,
    create
}