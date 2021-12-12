import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const RequireGuest = ({
    children
}) => {
    const { user } = useContext(AuthContext);

    return !user ? children : <Navigate to="/dashboard" />
}

export default RequireGuest