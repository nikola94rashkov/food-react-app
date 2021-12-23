import { signup } from '../../services/firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { validateEmail } from '../../validations/validations';

import './Register.scss';

const Register = () => {
    const [loading, setLoading] = useState(true);
    const [formClass, setFormClass] = useState('');
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email')        
        let password = formData.get('password')        

        try {
            await signup(email, password);
            navigate('/dashboard')
        } catch(error) {
            console.log(error)
            setFormClass('error')
        }

        setLoading(false);
    }

    const onChangeHandler = (e) => {
        if(validateEmail(e.target.value)) {
            setLoading(false)
            setFormClass('');
        } else {
            setFormClass('invalid-email');
        }
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

                                    <input type="text" onChange={onChangeHandler} name="email" id="email" placeholder />

                                    <p className="form__hint">
                                        This is not valid email address.
                                    </p>
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

                                <h6 className="hidden">Email or password</h6>

                                <p>Password need to contain last 6 characters</p>
                            </div>
                        </form>
                   </div>
                </div>
            </div>
        </section>
    );
}

export default Register