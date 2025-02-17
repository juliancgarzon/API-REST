const express = require('express');
const app = express();
const cors = require("cors");


//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));

//routes
app.use(require('./routes/routes'));


app.listen(3000);
console.log('server on port 3000');