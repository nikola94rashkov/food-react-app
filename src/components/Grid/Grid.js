import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../services/firebase';
import GridItem from '../GridItem/GridItem';
import GridColumns from './GridColumns/GridColumns';
import './Grid.scss';

const Grid = () => {
    const [gridCards, setGridCards] = useState([]);
    const articlesCollectionRef = collection(db, 'articles');

    useEffect(() => {
        const getCollection = async () => {
            const data = await getDocs(articlesCollectionRef);

            setGridCards(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }

        getCollection();
    }, [])

    return (
        <section className="section-grid">
            <div className="shell">
                <div className="section__head"> 
                    <h2>Recipes</h2>
                </div>

                <div className="section__body">
                    <div className="grid">
                        <div className="grid__row">
                            { 
                                gridCards.length > 0 
                                    ? gridCards.map( card =>  <GridColumns><GridItem card={card} /></GridColumns> ) 
                                    : <p>no recipes yet</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Grid