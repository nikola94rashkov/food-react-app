import { useContext } from 'react';
import { deleteCurrentRecord } from '../../services/firebase';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './GridItem.scss';

const GridItem = ({ card }) => {
    const { user } = useContext(AuthContext);

    const confirmPrompt = () => {
        let prompt = window.confirm("Are you sure you want to delete this item!");

        if(prompt) {
            deleteCurrentRecord(card.id);
        }

        return;
    }

    const actions = (
        <>
            <button className="btn btn--red" onClick={() => confirmPrompt()}>X</button>

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