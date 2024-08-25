import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <div className="ui card" onClick={handleClick}>
      <div className="image">
        <img alt={pokemon.name} src={pokemon.sprites.front_default} />
      </div>
      <div className="content">
        <div className="header">{pokemon.name}</div>
        <div className="meta">
          <small>{pokemon.catchphrase}</small>
        </div>
      </div>
      <div className="extra content">
        <span>
          <i className="icon heartbeat red" />
          {pokemon.stats[0].base_stat}
        </span>
        <span>
          <i className="icon lightning" />
          {pokemon.stats[1].base_stat}
        </span>
        <span>
          <i className="icon shield" />
          {pokemon.stats[2].base_stat}
        </span>
      </div>
    </div>
  );
};

export default PokemonCard;