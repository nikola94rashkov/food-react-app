import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getDocumentById } from '../../services/firebase';

import './GridItemDetails.scss';

const GridItemDetails = () => {
    const [details, setDetails] = useState({});
    const { recipeId } = useParams();

    useEffect(() => {
        getDocumentById(recipeId)
            .then(res => setDetails(res))
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }, []);


    const articleItemHtml = (
        <article className="article-single">
            <div className="shell">
                <div className="article__image image-fit">
                    <img src={details?.imageUrl} alt="recipe" />
                </div>

                <div className="article__body">
                    <h2>
                        { details?.title }
                    </h2>

                    <p>
                        { details?.description }
                    </p>
                </div>
            </div>
        </article>
    );
    
    return (
        <>
            { details ? articleItemHtml : <Navigate to="*" /> }
        </>
    );
}

export default GridItemDetails