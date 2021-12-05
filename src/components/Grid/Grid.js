import './Grid.scss';
import GridItem from '../GridItem/GridItem';

const Grid = () => {
    return (
        <section className="section-grid">
            <div className="shell">
                <div className="section__head"> 
                    <h2>Recipes</h2>
                </div>

                <div className="section__body">
                    <div className="grid">
                        <div className="grid__row">
                            <div className="grid__col grid__col--1of4">
                                <GridItem/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Grid