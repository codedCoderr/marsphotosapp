const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: !0 }));

const API_KEY = process.env.API_KEY;
const baseURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity';

app.get('/', (req, res) => {
  res.send('Server connected ');
});
app.post('/getimages', async (req, res) => {
  try {
  
    let { searchTerm, selectedOption } = req.body;
    const response = await axios.get(
      `${baseURL}/photos?sol=${searchTerm}&camera=${selectedOption}&page=1&api_key=${API_KEY}`
    );
    res.send(response.data);
  } catch (error) {
    return error.message;
  }
});

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log('Server started');
});

