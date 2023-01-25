import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PokemonCard = ({ url }) => {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    axios.get(url).then((resp) => setDetail(resp.data));
  }, [url]);
  return (
    <div className="pokemon-card">
      <div className="imgContainer">
      
      <img src={detail.sprites?.front_default} alt="" className='poke'/>
      </div>
      <Link to={`/dashboard/${detail?.name}`} className='link' >
      {detail.name}
      </Link>
      <div className="typeCard">
        {detail?.types?.map(type=>(
          <span key={type.type.name} className={type.type.name}> {type.type.name} </span>
        ))}
      </div>
      <h4>#{detail.id}</h4>
      </div>
  );
};

export default PokemonCard;