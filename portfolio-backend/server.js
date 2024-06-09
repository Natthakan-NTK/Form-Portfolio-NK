const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize the app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model for form data
const formSchema = new mongoose.Schema({
  username: String,
  nickname: String,
  firstName: String,
  lastName: String,
  position: String,
  nationality: String,
  telephone: String,
  startingDate: Date,
  address: String,
  subDistrict: String,
  district: String,
  province: String,
  postalCode: String,
  facebook: String,
  lineId: String,
  instagram: String,
  education: [
    {
      year: String,
      university: String,
    },
  ],
  experience: [
    {
      title: String,
      duration: String,
    },
  ],
  skills: [
    {
      skill: String,
      score: Number,
    },
  ],
  interests: [String],
  guilds: [String],
});

const Form = mongoose.model('Form', formSchema);

// Define API routes

// Save form data
app.post('/api/save', async (req, res) => {
  try {
    const formData = new Form(req.body);
    await formData.save();
    res.status(200).send('Data saved successfully!');
  } catch (error) {
    res.status(500).send('Error saving data: ' + error);
  }
});

// Get all form data
app.get('/api/data', async (req, res) => {
  try {
    const data = await Form.find();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error retrieving data: ' + error);
  }
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
