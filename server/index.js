const express = require('express');
const bodyParser = require('body-parser');
const validateRequest = require('./spectral');

const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//expose sample ruleset
app.get('/ruleset', (req, res) => {
    res.sendFile('ruleset.json', { root: __dirname });
});

//create endpoint to validate the request using spectral
app.post('/validate', validateRequest, (req, res) => {
    res.json({ message: 'Request is valid' });
});

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});

