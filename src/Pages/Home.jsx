
import { useSelector, useDispatch } from 'react-redux' 
import { changeName } from '../store/slices/username.slice'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const name = useSelector( state => state.username )

  const dispatch = useDispatch() 
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch( changeName( e.target[0].value ) )

    navigate( "/dashboard" )
  }


    return (
        <div className='home'> 
            <h1>Bienvenido Entrenador</h1>
            <h2>ingresa tu nombre para acceder al Pokedex</h2>
    
            <form action="" onSubmit={ (e) => handleSubmit(e) }>
            <input type="text" />
            <button>Enviar</button>
            </form>
        </div>
    )
}

export default Home