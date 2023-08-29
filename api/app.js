const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./framworks/webserver/routes');
const multer = require('multer');
const path = require('path');
const app = express();
const config = require('./config/config');
const mongoDbConnection = require('./framworks/database/mongoDB/connection');

dotenv.config();

// DB configuration and connection create
mongoDbConnection(mongoose, config, {
  autoIndex: false,
  useNewUrlParser: true,
  connectTimeoutMS: 1000,
}).connectToMongo();
app.use('/images', express.static(path.join(__dirname, 'public/images')));

/* module.exports = connectToMongo; */
// middelware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    console.log('req.body.name ', file.customFileName);
    cb(null, req.body.name);
  },
});
const upload = multer({ storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    console.log('req.body ', req.body);
    return res.status(200).json('File uploaded successfully');
  } catch (err) {}
});
app.use(routes);

app.listen(8800, () => {
  console.log('Backend server is running!');
});
