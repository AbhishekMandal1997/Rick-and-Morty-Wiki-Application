import { Link } from 'react-router-dom';

export default function CharacterCard({ character }) {
  const { id, name, image, species, status } = character;
  
  return (
    <div className="character-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Species: {species}</p>
      <p>Status: {status}</p>
      <Link to={`/character/${id}`}>View Details</Link>
    </div>
  );
}
