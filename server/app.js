const express = require('express');
const bodyParser = require('body-parser');
const App = express();

const User = {
    username: 'test@ukr.net',
    pass: '123456'
};

App.use(bodyParser.json());

App.post('/api/checkUser', (req, res) => {
    req.body
});
App.listen(4000, () => console.log('server'));