
import { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonCard from '../components/PokemonCard'

const Dashboard = () => {

    const [ type, setTypes ] = useState( [] )
    const [ pokemons, setPokemons ] = useState( [] )

    useEffect(() => {

        axios
        .get( " https://pokeapi.co/api/v2/type" )
        .then( (resp) => setTypes( resp.data.results ))
        .catch( error => console.error(error) )

        axios
        .get( "https://pokeapi.co/api/v2/pokemon" )
        .then( resp => setPokemons( resp?.data?.results ) )
        .catch( error => console.error(error) )
    }, [])

    const searchCharacter = (e) => {
        e.preventDefault();
        setPokemons(e.target[0].value.toLowerCase());
      };
    const selectedType = (e) => {
        const url = e.target.value

        axios
        .get( url )
        .then( resp => setPokemons(resp.data.pokemon) )
        .catch( error => console.error(error) )
    }

    return (
        <div className='pokemons'>
            <h2>Wlcome Trainer </h2>
            <h2>Search for pokemon type</h2>
            <select name="" id="" onChange={selectedType} className='selectorBtn'>
                {
                    type?.map( types => (
                        <option value={types.url} key={types.name}>{types.name}</option>
                    ) )
                }
            </select>
               <h2> look for an specific Pokemon</h2>
               <form onSubmit={(e) => searchCharacter(e)}>
               <input type="text" placeholder="Buscar por nombre" />
        <button type="submit">Search</button>
      </form>
            <div className='cardWrapper'>
                {
                    pokemons.map( (item, index) => (
                        <PokemonCard
                        key={index}
                        url={ item.pokemon ? item.pokemon.url : item.url }
                        />
                    ))
                }
           </div>
                <button>Next</button>
                <button>Prev</button>
        </div>
    )
}

export default Dashboard