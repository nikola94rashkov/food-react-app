import { useAuth } from '../../hooks/useAuth';
import { Outlet , Link } from 'react-router-dom';

const Dashboard = () => {
    const currentUser = useAuth();

    return (
        <section className="section-dashboard">
            <div className="shell">
                <div className="section__head">
                    <h2>
                        Hello { currentUser?.email }
                    </h2>
                </div>

                <div className="section__nav">
                    <ul>
                        <li><Link to="add">Add new recipe</Link></li>
                        <li><Link to="edit">View your recipes</Link></li>
                    </ul>
                </div>

                <div className="section__body">
                    <Outlet/>
                </div>
            </div>
        </section>
    );
}

export default Dashboard