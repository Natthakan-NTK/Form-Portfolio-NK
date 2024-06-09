import React from 'react';
import './EducationalInfo.css'; // Make sure to create and style this CSS file as well

const EducationalInfo = ({ formData, setFormData }) => {
  const handleAddEducation = () => {
    const newEducation = { year: '', university: '' };
    setFormData({
      ...formData,
      education: [...formData.education, newEducation],
    });
  };

  const handleChange = (index, e) => {
    const newEducation = formData.education.map((edu, i) =>
      i === index ? { ...edu, [e.target.name]: e.target.value } : edu
    );
    setFormData({ ...formData, education: newEducation });
  };

  return (
    <div className="educational-info">
      <h2>Educational Information</h2>
      {formData.education && formData.education.map((edu, index) => (
        <div key={index} className="education-entry">
          <div className="input-group">
            <label>Year</label>
            <input
              name="year"
              placeholder="Year"
              value={edu.year}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div className="input-group">
            <label>University Name</label>
            <input
              name="university"
              placeholder="University Name"
              value={edu.university}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
        </div>
      ))}
      <button className="add-education-btn" onClick={handleAddEducation}>
        Add Education
      </button>
    </div>
  );
};

export default EducationalInfo;
