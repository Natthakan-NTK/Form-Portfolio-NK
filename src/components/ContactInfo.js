import React, { useState, useEffect } from 'react';
import './ContactInfo.css';

const ContactInfo = ({ formData, setFormData }) => {
  const [subDistricts, setSubDistricts] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [postalCodes, setPostalCodes] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // Mock data fetching, replace with actual data fetching logic
    setSubDistricts(['Sub District 1', 'Sub District 2']);
    setDistricts(['District 1', 'District 2']);
    setProvinces(['Province 1', 'Province 2']);
    setPostalCodes(['10000', '20000']);
  }, []);

  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <div className="input-group">
        <label>Address</label>
        <input name="address" placeholder="Address" onChange={handleInputChange} />
      </div>
      <div className="input-group">
        <label>Sub District</label>
        <select name="subDistrict" onChange={handleInputChange}>
          <option value="">Please select</option>
          {subDistricts.map((subDistrict, index) => (
            <option key={index} value={subDistrict}>{subDistrict}</option>
          ))}
        </select>
      </div>
      <div className="input-group">
        <label>District</label>
        <select name="district" onChange={handleInputChange}>
          <option value="">Please select</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>{district}</option>
          ))}
        </select>
      </div>
      <div className="input-group">
        <label>Province</label>
        <select name="province" onChange={handleInputChange}>
          <option value="">Please select</option>
          {provinces.map((province, index) => (
            <option key={index} value={province}>{province}</option>
          ))}
        </select>
      </div>
      <div className="input-group">
        <label>Postal Code</label>
        <select name="postalCode" onChange={handleInputChange}>
          <option value="">Please select</option>
          {postalCodes.map((postalCode, index) => (
            <option key={index} value={postalCode}>{postalCode}</option>
          ))}
        </select>
      </div>
      <div className="input-group">
        <label>Facebook</label>
        <input name="facebook" placeholder="Facebook" onChange={handleInputChange} />
      </div>
      <div className="input-group">
        <label>LINE ID</label>
        <input name="lineId" placeholder="LINE ID" onChange={handleInputChange} />
      </div>
      <div className="input-group">
        <label>Instagram</label>
        <input name="instagram" placeholder="Instagram" onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default ContactInfo;
