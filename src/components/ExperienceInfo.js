import React from 'react';
import './ExperienceInfo.css'; // Make sure to create and style this CSS file as well

const ExperienceInfo = ({ formData, setFormData }) => {
  const handleAddExperience = () => {
    const newExperience = { title: '', duration: '' };
    setFormData({
      ...formData,
      experience: [...formData.experience, newExperience],
    });
  };

  const handleChange = (index, e) => {
    const newExperience = formData.experience.map((exp, i) =>
      i === index ? { ...exp, [e.target.name]: e.target.value } : exp
    );
    setFormData({ ...formData, experience: newExperience });
  };

  const handleRemoveExperience = (index) => {
    const newExperience = formData.experience.filter((_, i) => i !== index);
    setFormData({ ...formData, experience: newExperience });
  };

  return (
    <div className="experience-info">
      <h2>Experience Information</h2>
      {formData.experience && formData.experience.map((exp, index) => (
        <div key={index} className="experience-entry">
          <div className="input-group">
            <label>Title</label>
            <input
              name="title"
              placeholder="Title"
              value={exp.title}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div className="input-group">
            <label>Duration</label>
            <input
              name="duration"
              placeholder="Duration"
              value={exp.duration}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <button className="remove-experience-btn" onClick={() => handleRemoveExperience(index)}>
            x
          </button>
        </div>
      ))}
      <button className="add-experience-btn" onClick={handleAddExperience}>
        Add Experience
      </button>
    </div>
  );
};

export default ExperienceInfo;
