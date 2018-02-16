const express = require('express');
const bodyParser = require('body-parser');
const App = express();

App.use(bodyParser.json());

App.post('/api/user', (req, res) => {
    console.log(req.body);
    console.log('aaa');

    return res.json();
});

App.listen(4000, () => {
    console.log('server is started');
});