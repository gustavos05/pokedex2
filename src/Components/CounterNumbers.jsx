
import {useSelector} from 'react-redux'

const CounterNumber = () => {

    const otherCounter = useSelector( state => state.counter )

    return (
        <div>
            <h1>{otherCounter}</h1>
            <h2>Este es otro componente</h2>
        </div>
    )
}

export default CounterNumber
