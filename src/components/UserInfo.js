import React, { useState } from 'react';
import './UserInfo.css'; // Make sure to create and style this CSS file as well

const UserInfo = ({ formData, setFormData }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfilePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleCoverPhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCoverPhoto(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="user-info">
      <h2>User Information</h2>
      <div className="cover-photo" style={{ backgroundImage: `url(${coverPhoto})` }}>
        <label className="edit-cover-photo-btn">
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverPhotoChange}
            className="cover-photo-input"
          />
          EDIT COVER PHOTO
        </label>
        <div className="profile-pic-container">
          <img src={profilePic || 'default-profile-pic1.png'} alt="Profile" className="profile-pic" />
          <label className="edit-photo-btn">
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="profile-pic-input"
            />
            <i className="camera-icon">📷</i>
          </label>
        </div>
      </div>
      <div className="form-fields">
        <div className="input-group">
          <label>Username</label>
          <input name="username" placeholder="Username" onChange={handleInputChange} />
        </div>
        <div className="input-group">
          <label>Nick Name</label>
          <input name="nickname" placeholder="Nick Name" onChange={handleInputChange} />
        </div>
        <div className="input-group">
          <label>First Name</label>
          <input name="firstName" placeholder="First Name" onChange={handleInputChange} />
        </div>
        <div className="input-group">
          <label>Last Name</label>
          <input name="lastName" placeholder="Last Name" onChange={handleInputChange} />
        </div>
        <div className="input-group">
          <label>Position</label>
          <select name="position" onChange={handleInputChange}>
            <option value="">Please select</option>
            {/* Add position options here */}
          </select>
        </div>
        <div className="input-group">
          <label>Nationality</label>
          <input name="nationality" placeholder="Nationality" onChange={handleInputChange} />
        </div>
        <div className="input-group">
          <label>Telephone Number</label>
          <input name="telephone" placeholder="Telephone Number" onChange={handleInputChange} />
        </div>
        <div className="input-group">
          <label>Starting Date</label>
          <input name="startingDate" type="date" onChange={handleInputChange} />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
