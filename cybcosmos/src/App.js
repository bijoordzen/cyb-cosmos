import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const RoboHashAvatar = ({ name }) => {
  const imageUrl = `https://robohash.org/${name}?size=150x150`;
  return <img src={imageUrl} alt={`Robot ${name}`} />;
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [robotNames, setRobotNames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRobotNames = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const names = response.data.map((user) => user.username);
        setRobotNames(names);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching robot names:', error);
        setLoading(false);
      }
    };

    fetchRobotNames();
  }, []);

  const filteredRobots = robotNames.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header>
        <h1>Cybcosmos Search</h1>
        <input
          type="text"
          placeholder="Search robots..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      {loading && <p>Loading robot names...</p>}
      <div className="robot-list">
        {filteredRobots.map((name) => (
          <div key={name} className="robot-card">
            <RoboHashAvatar name={name} />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
