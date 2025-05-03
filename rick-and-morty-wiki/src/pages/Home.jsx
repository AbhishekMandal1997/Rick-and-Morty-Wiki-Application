import { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';
import RandomCharacterButton from '../components/RandomCharacterButton';
import FooterClock from '../components/FooterClock';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Failed to fetch characters:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="home-container">
      <div className="action-buttons">
        <RandomCharacterButton />
      </div>
      
      <h1 className="home-title">Rick and Morty Characters</h1>

      <div className="character-grid">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <div className="pagination-controls">
        <button 
          onClick={() => setPage(p => p - 1)} 
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage(p => p + 1)}>
          Next
        </button>
      </div>

      <FooterClock />
    </div>
  );
}
