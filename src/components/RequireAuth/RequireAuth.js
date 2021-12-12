import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const RequireAuth = ({
    children,
    redirectTo
}) => {
    const { user } = useContext(AuthContext);

    return user ? children : <Navigate to={redirectTo} />
}

export default RequireAuth