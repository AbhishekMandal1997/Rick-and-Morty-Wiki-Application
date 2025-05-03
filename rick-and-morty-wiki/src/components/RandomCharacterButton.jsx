import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RandomCharacterButton() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      const count = response.data.info.count;
      const randomId = Math.floor(Math.random() * count) + 1;
      navigate(`/character/${randomId}`);
    } catch (error) {
      console.error('Failed to get random character:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button 
        className="random-character"
        onClick={handleClick}
        disabled={loading}
      >
        <span>🎲</span>
        Random Character
      </button>
      
      {loading && (
        <div className="random-loading">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
} 