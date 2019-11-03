import 'dotenv/config';

const express = require('express');
const morgan = require('morgan');
const process = require('process');

// Note that middleware is a _chain_. The _order_ of these middleware
// entries matters!
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('local'));

app.get('/', (req, res) => {
    res.send('Hello world');
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});