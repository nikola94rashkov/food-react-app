import { useContext } from 'react';
import { deleteCurrentRecord } from '../../services/firebase';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './GridItem.scss';

const GridItem = ({ card }) => {
    const { user } = useContext(AuthContext);

    const actions = (
        <>
            <button className="btn btn--red" onClick={() => deleteCurrentRecord(card.id)}>X</button>

            <div className="article__actions">
                <Link className="btn" to={`edit/${card?.id}`}>Edit</Link>
            </div>
        </>
    );

    return (
        <article className="article-recipe">
            <Link to={`/recipes/${card?.id}`}></Link>

            <div className="article__image image-fit">
                <img src={card?.imageUrl} alt="recipe" />
            </div>

            <div className="article__content">
                <h5>{card?.title}</h5>
            </div>

            {
                user?.uid == card.userId
                ? actions
                : <></>
            }
        </article> 
    );
}

export default GridItem