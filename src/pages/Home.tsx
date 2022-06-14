import React from 'react'
import Card from '../components/Card';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getPokemons } from '../redux/reducers/pokemonsReducer';

function Home() {
  const pokemons = useAppSelector((state) => state.pokemons.pokemons)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
      function fetchData() {
        if (!(pokemons.length > 0)) {
            dispatch(getPokemons())
        }
        console.log(pokemons);
      }
      fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div style={{
      display:"flex",
      flexWrap:"wrap",
    }}>
        {           
            pokemons.length > 0 ? pokemons.map((pokemon) => <Card key={pokemon.id} name={pokemon.name!} image={pokemon.image!} />):null
        }
    </div>
  )
}

export default Home