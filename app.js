const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({ path: 'variables.env' });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => console.log('Express server is listening on port 3000'));

/*
================= Endpoints =================

*/

const verifyWebhook = require('./src/verify-webhook.js').default;

app.get('/', verifyWebhook);

const messageWebhook = require('./src/message-webhook.js').default;

app.post('/', messageWebhook);