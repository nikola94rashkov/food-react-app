import './GridItem.scss';

const GridItem = () => {
    return (
        <article className="article-recipe">
            <a href=""></a>

            <div className="article__image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFvhvAVB5VgZ0W6xltgTTMva4_gi-T8y1VBg&usqp=CAU" alt="recipe" />
            </div>

            <div className="article__content">
                <h6>Food recipe 1</h6>
            </div>
        </article> 
    );
}

export default GridItem