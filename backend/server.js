const express = require('express');
const cors = require('cors');
// const bodyparser = require('body-parser');
const app = express();
const userRoutes = require('./routes/user_route');

const connection = require('./config/dbConfig');
connection.connect((Error)=>{
    console.log(Error);
})
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(userRoutes);

// build static Server
// app.use(express.static(__dirname + '../../../PORTFOLIO(COPY)/my-app/build'));

const PORT = process.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`server listen on PORT: ${PORT}`);
})