import { useState, useContext } from 'react';
import { docRef, uploadImageToStorage } from '../../services/firebase';
import { AuthContext } from '../../context/AuthContext';

const CreateForm = () => {
    const [imageUrl, setImageUrl] = useState('');

    const { user } = useContext(AuthContext);
    const userId = user?.uid;

    const onChangeHandler = (e) => {
        e.preventDefault();
        const image = e.target.files[0];
        uploadImageToStorage(image, setImageUrl);
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        let description = formData.get('description');

        const createFormData = {
            description,
            imageUrl,
            userId,
            title
        }

        docRef(createFormData);

        e.currentTarget.reset();
    }

    return (
        <div className="form">
            <h2>Create recipe</h2>

            <form onSubmit={onSubmitHandler}>
                <div className="form__body">
                    <div className="form__row">
                        <label htmlFor="imageUrl">image url</label>

                        <input type="file" onChange={onChangeHandler} name="imageUrl" id="imageUrl" accept="image/png, image/jpeg" />
                    </div>

                    <div className="form__row">
                        <label htmlFor="title">Title</label>

                        <input type="title" name="title" id="title" />
                    </div>

                    <div className="form__row">
                        <label htmlFor="description">Description</label>

                        <textarea type="description" name="description" id="description" />
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