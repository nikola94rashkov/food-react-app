import { useAuth } from '../../hooks/hooks';

const Dashboard = () => {
    const currentUser = useAuth();

    return (
        <p>
            Hello {currentUser?.email}
        </p>
    );
}

export default Dashboard