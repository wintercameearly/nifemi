const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv/config');




// ** MIDDLEWARE ** //
const whitelist = ['http://localhost:3000', 'http://localhost:8082', 'https://shrouded-journey-38552.heroku...']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));



app.use(express.urlencoded({extended: true}))
app.use(express.json())

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).catch(err => console.error(err))

mongoose.connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})

app.use('/api/v1/user', require('./routes/user'));
app.use('/api/v1/project', require('./routes/project'));


const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}



app.listen(3300, () => {
  console.log(`server listening on port 3300`)
})





