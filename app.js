const express = require('express');
const logger = require('morgan');
const routes = require('./routes/cust');
const app = express();


app.use(logger('dev'));

app.use('/api',routes);

app.listen(3000,()=>{
    console.log('Server is runninng @3000');
})