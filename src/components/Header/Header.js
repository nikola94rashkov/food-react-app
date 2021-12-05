import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';
import './Header.scss'

import logo from '../../images/Pizza-Slice-in-Tango-Colors.svg';

const Header = () => {
    const user = useAuth();
    const navigate = useNavigate();

    const onClickHandler = async (e) => {
        e.preventDefault();

        try {
            await logout(); 
            navigate('/');
        } catch {
            console.log('error')            
        }
    }

    const guestNavigation = (
        <li><Link to="/login">Log in</Link></li>
    );

    const userNavigation = (
        <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><a href="" onClick={onClickHandler}>Log out</a></li>
        </>
    );

    return (
        <header className="header">
            <div className="shell">
                <div className="header__inner">
                    <div className="header__logo">
                        <Link to="/" className="logo">Food <br/><span>ans <sup><img src={logo} alt="logo" /></sup></span></Link>
                    </div>

                    <div className="header__nav">
                        <nav className="nav">
                            <ul>
                                { user?.email ? 
                                    userNavigation :
                                    guestNavigation
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header