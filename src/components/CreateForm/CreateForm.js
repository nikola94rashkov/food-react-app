import { useState, useContext } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage, docRef } from '../../services/firebase';
import { AuthContext } from '../../context/AuthContext';

const CreateForm = () => {
    const [imageUrl, setImageUrl] = useState('');

    const { user } = useContext(AuthContext);
    const userId = user.uid;

    const onChangeHandler = (e) => {
        e.preventDefault();
        const image = e.target.files[0];
        uploadImageHandler(image);

        console.log(uploadImageHandler(image))
    };

    const uploadImageHandler = (image) => {
        if(!image) return;

        const storageRef = ref(storage, `/images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on('state_change', (snapshot) => {
            console.log(snapshot)
        }, 
        (err) => console.log(err),
        () => {
            getDownloadURL(uploadTask.snapshot.ref)
            .then(url => setImageUrl(url))
        }
        );
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        // let imageUrl = formData.get('imageUrl');
        let description = formData.get('description');

        const createFormData = {
            description,
            imageUrl,
            userId,
            title
        }

        docRef(createFormData);
    }

    return (
        <div className="form">
            <h2>Create recipe</h2>

            <form onSubmit={onSubmitHandler}>
                <div className="form__body">
                    <div className="form__row">
                        <label htmlFor="imageUrl">image url</label>

                        <input type="file" onChange={onChangeHandler} name="imageUrl" id="imageUrl" accept="image/png, image/jpeg" />
                        {/* <input type="text" name="imageUrl" id="imageUrl" /> */}
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