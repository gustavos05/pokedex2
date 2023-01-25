
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const ProtectedRoutes = () => {
    const name = useSelector( state => state.username )


    if( name !== "" ){
        
        return <Outlet />
    }else{
        //redirigir a otra vista que sea publica
        return <Navigate to="/"/> 
    }

}

export default ProtectedRoutes