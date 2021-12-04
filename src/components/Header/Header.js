import { Link } from 'react-router-dom'

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
                        <Link to="/" className="logo">Food <span>Addicted</span></Link>
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