require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
  }));
  app.use(cookieParser());
  app.use(express.json());

app.get('/', (req, res) => {
    res.send('Talkify server is Okkkkkay');
  })
  
  app.listen(port, (req, res) => {
    console.log(`server is running on ${port}`);
  })