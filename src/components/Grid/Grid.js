import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../services/firebase';
import GridItem from '../GridItem/GridItem';
import './Grid.scss';

const Grid = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() =>{
        fetchArticles();
    }, [])

    const fetchArticles = async() =>{
        const querySnapshot = await getDocs(collection(db, "articles"));

        querySnapshot.forEach((doc) => {
            setArticles([...articles, doc.data()])
        });
    }

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
                                { articles.map(x => <GridItem data={x}/>) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Grid