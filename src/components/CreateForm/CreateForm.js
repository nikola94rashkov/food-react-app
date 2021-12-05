import { useAuth } from '../../hooks/useAuth';

const CreateForm = () => {
    const currentUser = useAuth();

    return (
        <div className="form">
            <p>{currentUser?.id}</p>

            <form>
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
                </div>
            </form>
        </div>
    );
}

export default CreateForm