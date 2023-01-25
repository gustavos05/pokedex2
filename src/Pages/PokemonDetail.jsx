
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const PokemonDetail = () => {

    const [ data, setData ] = useState({})
    const { name } = useParams()

    useEffect(() => {

        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(resp => setData(resp.data))

    }, [name])

    return(
        <div>
       <div className={data?.types?.[0]?.type.name}>
            <div className='Pcontainer'>
                <div className="pokemon-detail-view">
                <h1>{data?.name}</h1>
                <img src={data.sprites?.other["official-artwork"].front_default} alt={data?.name}  className='Pimg'/>
                <h2>#{data?.id}</h2>
                <h3> height</h3>
                <h3>{data?.height}"</h3>
                <h3> weight</h3>
                <h3>{data?.weight}Kg</h3>
                </div>
                <div className='Profile'>
                    <h2>Profile</h2>
                    <div className="typeCardd">
                        <h4>Type:</h4>
                        {data?.types?.map(type=>(
          <             span key={type.type.name} className={type.type.name}> {type.type.name} </span>
                     ))}
                    </div>
                    <div className='abilitiesCard'>
                        <h4>Abilities</h4>
                    {data?.abilities?.map(ability=>(
                    <span key={ability.ability.name} className={ability.ability.name}> {ability.ability.name} </span>
                     ))}
                     </div>
                     <div className='statsCard'>
                        <h4>Stats</h4>
                    {data?.stats?.map(stat=>(
                    <span key={stat.stat.name} className={stat.stat.name}> {stat.stat.name} <div className='progressBar' > {stat.base_stat}</div></span>
                     ))}
                     </div>
                </div>
            </div>
            </div>
            <button>Go to Pokedex</button>
            </div>
    )
}

export default PokemonDetail
