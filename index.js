const express = require('express');
const app = express();
const PORT = process.env.PORT || 4500 ;

const insertInto = require('./models/academic_degrees');

app.use(express.json());
app.use('/api', insertInto);

app.listen(PORT, '192.168.1.70',() =>{
    console.log(`Run port number ${PORT}`);
});
