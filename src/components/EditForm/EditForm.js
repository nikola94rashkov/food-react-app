import { useState, useContext, useEffect } from 'react';
import { uploadImageToStorage, updateDocumentValues, getDocumentById } from '../../services/firebase';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const EditForm = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [details, setDetails] = useState({});
    const { recipeId } = useParams();
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);
    const userId = user?.uid;

    useEffect(() => {
        getDocumentById(recipeId)
            .then(res => setDetails(res))
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }, [recipeId]);

    useEffect(() => {
        setImageUrl(details.imageUrl);
        window.scrollTo(0,0);
    }, [details]);

    const onChangeHandler = (e) => {
        e.preventDefault();
        const image = e.target.files[0];
        uploadImageToStorage(image, setImageUrl);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let title = formData.get('title').toLocaleLowerCase();
        let description = formData.get('description');

        const updatedData = {
            "description": description,
            "imageUrl": imageUrl,
            "title": title
        }

        updateDocumentValues(updatedData, recipeId);

        e.currentTarget.reset();

        navigate('/dashboard/');
    }

    return (
        <div className="form">
            <h2>Edit Recipe</h2>
            
            <form onSubmit={onSubmitHandler}>
                <div className="form__body">
                    <div className="form__row">
                        <label htmlFor="imageUrl">image url</label>

                        <input type="file" onChange={onChangeHandler} name="imageUrl" id="imageUrl" accept="image/*"/>

                        <span>accepts jpg and png format</span>
                    </div>

                    <div className="form__row">
                        <label htmlFor="title">Title</label>

                        <input type="title" defaultValue={details.title} name="title" id="title" required/>
                    </div>

                    <div className="form__row">
                        <label htmlFor="description">Description</label>

                        <textarea type="description" name="description" defaultValue={details.description} id="description" required/>
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

export default EditForm;