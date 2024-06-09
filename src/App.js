import React, { useState } from 'react';

function App() {
  const [portfolio, setPortfolio] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    description: ''
  });

  const handleChange = (e) => {
    setPortfolio({ ...portfolio, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/portfolio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(portfolio)
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={portfolio.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={portfolio.email} onChange={handleChange} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={portfolio.phone} onChange={handleChange} />
        </div>
        <div>
          <label>Website:</label>
          <input type="text" name="website" value={portfolio.website} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={portfolio.description} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
