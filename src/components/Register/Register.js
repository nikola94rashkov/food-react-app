import './Register.scss';

const Register = () => {
    return (
        <section className="section-form">
            <div className="shell">
                <div className="section__head">
                    <h2>
                        Register
                    </h2>
                </div>

                <div className="section__body">
                    <div className="form">
                        <form action="">
                            <div className="form__body">
                                <div className="form__row">
                                    <label htmlFor="firstName">First Name</label>

                                    <input type="text" name="firstName" id="firstName" placeholder />
                                </div>

                                <div className="form__row">
                                    <label htmlFor="lastName">Last Name</label>

                                    <input type="text" name="lastName" id="lastName" placeholder />
                                </div>

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
                            </div>
                        </form>
                   </div>
                </div>
            </div>
        </section>
    );
}

export default Register