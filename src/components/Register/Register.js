import { signup } from '../../services/firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import './Register.scss';

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [formClass, setFormClass] = useState('');
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email')        
        let password = formData.get('password')        

        setLoading(true);
        
        try {
            await signup(email, password);
            navigate('/dashboard')
        } catch(error) {
            console.log(error)
            setFormClass('error')
        }

        setLoading(false);
    }

    return (
        <section className="section-form">
            <div className="shell">
                <div className="section__head">
                    <h2>
                        Register
                    </h2>
                </div>

                <div className="section__body">
                    <div className={`form ${formClass}`}>
                        <form onSubmit={onSubmitHandler}>
                            <div className="form__body">
                                <div className="form__row">
                                    <label htmlFor="email">Email</label>

                                    <input type="text" name="email" id="email" placeholder />
                                </div>

                                <div className="form__row">
                                    <label htmlFor="password">Password</label>

                                    <input type="password" name="password" id="password" />
                                </div>
                            </div>

                            <div className="form__actions">
                                <button disabled={loading} className="btn">
                                    Submit
                                </button>

                                <h6 className="hidden">Invalid email format</h6>
                            </div>
                        </form>
                   </div>
                </div>
            </div>
        </section>
    );
}

export default Register