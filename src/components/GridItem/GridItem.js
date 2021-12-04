import { Link } from 'react-router-dom';
import './GridItem.scss';

const GridItem = () => {
    return (
        <article className="article-recipe">
            <Link to={`/:recipeId`}></Link>

            <div className="article__image image-fit">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFvhvAVB5VgZ0W6xltgTTMva4_gi-T8y1VBg&usqp=CAU" alt="recipe" />
            </div>

            <div className="article__content">
                <h5>Свинско със зеле</h5>
            </div>
        </article> 
    );
}

export default GridItem