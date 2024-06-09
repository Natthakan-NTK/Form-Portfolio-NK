import React, { useState } from 'react';
import './InterestsInfo.css'; // Make sure to create and style this CSS file as well

const InterestsInfo = ({ formData, setFormData }) => {
  const [interest, setInterest] = useState('');

  const handleAddInterest = () => {
    if (interest) {
      setFormData({
        ...formData,
        interests: [...formData.interests, interest],
      });
      setInterest('');
    }
  };

  const handleRemoveInterest = (interestToRemove) => {
    const newInterests = formData.interests.filter(i => i !== interestToRemove);
    setFormData({ ...formData, interests: newInterests });
  };

  return (
    <div className="interests-info">
      <h2>Interests Information</h2>
      <div className="add-interest-form">
        <input
          name="interest"
          placeholder="Interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
        <button className="add-interest-btn" onClick={handleAddInterest}>
          Add Interest
        </button>
      </div>
      <div className="interests-list">
        {formData.interests && formData.interests.map((interest, index) => (
          <span key={index} className="interest-chip">
            {interest}
            <button className="remove-interest-btn" onClick={() => handleRemoveInterest(interest)}>
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default InterestsInfo;
