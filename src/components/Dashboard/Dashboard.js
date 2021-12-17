import { Outlet , Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import ListMyRecipes from '../ListMyRecipes/ListMyRecipes';

import './Dashboard.scss';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <section className="section-dashboard">
            <div className="shell">
                <div className="section__head">
                    <h2>
                        Hello { user?.email }
                    </h2>
                </div>

                <div className="section__nav">
                    <ul>
                        <li><Link to="add">Add new recipe</Link></li>
                    </ul>
                </div>

                <div className="section__body">
                    <div className="section__content">
                        <Outlet/>
                    </div>

                    <div className="section__list">
                        <ListMyRecipes uid={user.uid} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard