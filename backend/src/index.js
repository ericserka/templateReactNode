const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))
app.use(routes);

app.listen(3333);