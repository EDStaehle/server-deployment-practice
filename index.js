'use strict';

// require('dotenv').config()
// const express = require('express');
// const cors = require('cors');
// const PORT = process.env.PORT || 3002
// // create an instance of express => create a singleton
// const app = express();

// // middleware => functions that
// app.use(cors());

// a
// pp.get
// ('/', (req,res,next) => {
// res.status(200).seend('hello world');
//   next('error')
// })
// app.listen(PORT, () => console.log(`listening to server on ${PORT}`));
const server = require('./server.js');
server.start();
