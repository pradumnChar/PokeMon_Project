import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export default function SearchBar({ search, setSearch, typeFilter, setFilter, types }) {
  return (
    <Container>
      <input 
        type="text"
        placeholder="Search Pokémon "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={typeFilter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">Choose Type</option>
        {types.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </Container>
  );
}
