import styled from 'styled-components';
import PokemonCard from './PokemonCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin: 20px;
`;

export default function PokemonList({ pokemons }) {
  return (
    <Grid>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid>
  );
}
