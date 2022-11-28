'use strict';

require('dotenv').config()
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3002;
// create an instance of express => create a singleton
const app = express();

// middleware => functions that
app.use(cors());

app.get
('/', (req,res,next) => {
res.status(200).send('hello world');
  next('error')
})
function start(){
  app.listen(PORT, () => console.log(`listening to server on ${PORT}`));
}
module.exports = {start, app};

