import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FooterClock from '../components/FooterClock';


export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => setCharacter(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div className="character-detail-container">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <ul>
        <li>Status: {character.status}</li>
        <li>Species: {character.species}</li>
        <li>Type: {character.type || 'N/A'}</li>
        <li>Gender: {character.gender}</li>
        <li>Origin: {character.origin.name}</li>
        <li>Location: {character.location.name}</li>
        <li>Episode Appearances: {character.episode.length}</li>
      </ul>
      <FooterClock />
    </div>
  );
}
