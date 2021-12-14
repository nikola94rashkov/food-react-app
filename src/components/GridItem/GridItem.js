import { Link } from 'react-router-dom';
import './GridItem.scss';

const GridItem = ({ card }) => {
    return (
        <article className="article-recipe">
            <Link to={`/${card?.id}`}></Link>

            <div className="article__image image-fit">
                <img src={card?.imageUrl} alt="recipe" />
            </div>

            <div className="article__content">
                <h5>{card?.title}</h5>
            </div>
        </article> 
    );
}

export default GridItem