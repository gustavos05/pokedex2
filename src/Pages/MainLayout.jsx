
import { Outlet } from 'react-router-dom'


const MainLayout = () => {

    return( 
        <div>
            <nav>Barra de navegacion</nav>
            <Outlet/>
            <footer>
                Este es el footer
            </footer>
        </div>
    )

}

export default MainLayout