import { Link } from 'react-router-dom';
import './GridItem.scss';

const GridItem = (
    data
) => {
    return (
        <article className="article-recipe">
            <Link to={`/recipe/${data.id}`}></Link>

            <div className="article__image image-fit">
                <img src={data.imageUrl} alt="recipe" />
            </div>

            <div className="article__content">
                <h5>{data.title}</h5>
            </div>
        </article> 
    );
}

export default GridItem