const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv/config');

const app = express();
const corsOptions = {
  origin: "http://localhost:3001"
};
const corsOption2 = {
  origin: "http://localhost:8082"
}
app.use(cors(corsOptions, corsOption2));
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

app.listen(3300, () => {
  console.log(`server listening on port 3300`)
})