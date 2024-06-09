import React, { useState, useEffect } from 'react'; // <-- Add useEffect here
import axios from 'axios';
import UserInfo from './components/UserInfo';
import ContactInfo from './components/ContactInfo';
import EducationalInfo from './components/EducationalInfo';
import ExperienceInfo from './components/ExperienceInfo';
import SkillInfo from './components/SkillInfo';
import InterestsInfo from './components/InterestsInfo';
import GuildInfo from './components/GuildInfo';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    education: [],
    experience: [],
    skills: [],
    interests: [],
    guilds: [],
  });

  const [allData, setAllData] = useState([]);

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/save', formData);
      alert('Data saved successfully!');
      fetchData(); // Fetch data again after saving
    } catch (error) {
      console.error('Error saving data', error);
      alert('Failed to save data');
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/data');
      setAllData(response.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Portfolio Form</h1>
      <UserInfo formData={formData} setFormData={setFormData} />
      <ContactInfo formData={formData} setFormData={setFormData} />
      <EducationalInfo formData={formData} setFormData={setFormData} />
      <ExperienceInfo formData={formData} setFormData={setFormData} />
      <SkillInfo formData={formData} setFormData={setFormData} />
      <InterestsInfo formData={formData} setFormData={setFormData} />
      <GuildInfo formData={formData} setFormData={setFormData} />
      <button onClick={handleSubmit}>Save</button>

      {/* <h2>All Data</h2>
      <pre>{JSON.stringify(allData, null, 2)}</pre> */}
    </div>
  );
};

export default App;
