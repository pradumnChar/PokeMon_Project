import styled from 'styled-components';

const Card = styled.div`
  background: #e5eaf5;
  border-radius: 15px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 5px 5px rgba(0,0,0,0.1);
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export default function PokemonCard({ pokemon }) {
  return (
    <Card>
      <Image src={pokemon.image} alt={pokemon.name} />
      <p>ID: {pokemon.id}</p>
      <h3>{pokemon.name}</h3>
      <p>{pokemon.types.join(" & ")}</p>
      {/* to have the commaaa and and render both thi okay*/}
      {/* <p>{pokemon.types.toString()}</p> */}

    </Card>
  );
}
