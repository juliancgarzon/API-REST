const express = require('express');
const app = express();

//routes
app.use(require('./routes/routes'));

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(3000);
console.log('server on port 3000');