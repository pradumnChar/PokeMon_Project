
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [typeFilter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filteredPokemons = pokemons.filter(pokemon => {
  const Name = pokemon.name.toLowerCase().includes(search.toLowerCase());
  const Type = !typeFilter || pokemon.types.includes(typeFilter);
  return Name && Type;
});



  //getting unqiue item n^2
  const set = new Set();
for (const p of pokemons) {
  for (const type of p.types) {
    set.add(type);
  }
}
const types = [...set];


  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await response.json();
        
        const details = await Promise.all(
          data.results.map(ok => fetch(ok.url).then(res => res.json()))
        );


        const formatted = details.map(ok => ({
          id: ok.id,
          name: ok.name,
          image: ok.sprites.front_default,
          types: ok.types.map(o => o.type.name),
        }));

        setPokemons(formatted);
      } catch (error) {
        setError('Failed Sorry, Next Time');
      } 
        setLoading(false);
      
    };

    fetchPokemons();
  }, []);



  if (loading) return <p style={{ textAlign: 'center' }}>Loading...wait</p>;

  return (
    <>
     
      <Header />
      <SearchBar 
        search={search} 
        setSearch={setSearch} 
        typeFilter={typeFilter} 
        setFilter={setFilter}
        types={types}
      />
      {filteredPokemons.length > 0 ? (
        <PokemonList pokemons={filteredPokemons} />
      ) : (
        <p style={{ textAlign: 'center' }}>No Pokémon found.</p>
      )}
    </>
  );
}

export default App;
