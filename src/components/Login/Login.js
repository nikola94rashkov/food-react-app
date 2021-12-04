import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
    return (
        <section className="section-form">
            <div className="shell">
                <div className="section__head">
                    <h2>
                        Log in
                    </h2>
                </div>

                <div className="section__body">
                   <div className="form">
                        <form action="">
                            <div className="form__body">
                                <div className="form__row">
                                    <label htmlFor="email">Email</label>

                                    <input type="email" name="email" id="email" placeholder />
                                </div>

                                <div className="form__row">
                                    <label htmlFor="password">Password</label>

                                    <input type="password" name="password" id="password" />
                                </div>
                            </div>

                            <div className="form__actions">
                                <button className="btn">
                                    Submit
                                </button>

                                <p>
                                    Not registered? <Link to="/register">Create an account</Link> 
                                </p>
                            </div>
                        </form>
                   </div>
                </div>
            </div>
        </section>
    );
}

export default Login