import React, { useState } from 'react';
import './SkillInfo.css'; // Make sure to create and style this CSS file as well

const SkillInfo = ({ formData, setFormData }) => {
  const [skill, setSkill] = useState('');
  const [score, setScore] = useState('');

  const handleAddSkill = () => {
    if (skill && score) {
      const newSkill = { skill, score };
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill],
      });
      setSkill('');
      setScore('');
    }
  };

  return (
    <div className="skill-info">
      <h2>Skill Information</h2>
      {formData.skills && formData.skills.map((sk, index) => (
        <div key={index} className="skill-entry">
          <div className="skill-name">{sk.skill}</div>
          <div className="skill-score">{sk.score}</div>
          <div className="skill-bar">
            <div className="skill-bar-filled" style={{ width: `${sk.score * 10}%` }}></div>
          </div>
        </div>
      ))}
      <div className="add-skill-form">
        <input
          name="skill"
          placeholder="Skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <input
          name="score"
          placeholder="Score"
          type="number"
          min="1"
          max="10"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button className="add-skill-btn" onClick={handleAddSkill}>
          Add Skill
        </button>
      </div>
    </div>
  );
};

export default SkillInfo;
