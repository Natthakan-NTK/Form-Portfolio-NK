const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Portfolio Schema
const portfolioSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  website: String,
  description: String,
});

// Define Portfolio Model
const Portfolio = mongoose.model('Portfolio', portfolioSchema);

app.use(cors());
app.use(bodyParser.json());

// Create a new portfolio
app.post('/api/portfolio', async (req, res) => {
  const portfolio = new Portfolio(req.body);
  await portfolio.save();
  res.send({ message: 'Portfolio created' });
});

// Get all portfolios
app.get('/api/portfolios', async (req, res) => {
  const portfolios = await Portfolio.find();
  res.send(portfolios);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
