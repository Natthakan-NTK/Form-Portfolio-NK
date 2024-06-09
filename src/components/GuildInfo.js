import React, { useState } from 'react';
import './GuildInfo.css'; // Make sure to create and style this CSS file as well

const GuildInfo = ({ formData, setFormData }) => {
  const [guild, setGuild] = useState('');

  const handleAddGuild = () => {
    if (guild) {
      setFormData({
        ...formData,
        guilds: [...formData.guilds, guild],
      });
      setGuild('');
    }
  };

  const handleRemoveGuild = (guildToRemove) => {
    const newGuilds = formData.guilds.filter(g => g !== guildToRemove);
    setFormData({ ...formData, guilds: newGuilds });
  };

  return (
    <div className="guild-info">
      <h2>Guild Information</h2>
      <div className="add-guild-form">
        <input
          name="guild"
          placeholder="Guild"
          value={guild}
          onChange={(e) => setGuild(e.target.value)}
        />
        <button className="add-guild-btn" onClick={handleAddGuild}>
          Add Guild
        </button>
      </div>
      <div className="guilds-list">
        {formData.guilds && formData.guilds.map((guild, index) => (
          <span key={index} className="guild-chip">
            {guild}
            <button className="remove-guild-btn" onClick={() => handleRemoveGuild(guild)}>
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default GuildInfo;
