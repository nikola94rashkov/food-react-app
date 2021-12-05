import { useAuth } from '../../hooks/useAuth';

const Dashboard = () => {
    const currentUser = useAuth();

    return (
        <p>
            Hello {currentUser?.email}
        </p>
    );
}

export default Dashboard