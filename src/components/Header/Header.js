import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '../../images/Pizza-Slice-in-Tango-Colors.svg';

const Header = (user) => {
    const guestNavigation = (
        <li><Link to="/login">Sign up</Link></li>
    );

    const userNavigation = (
        <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/logout">Log out</Link></li>
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
                                { user.email ? 
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