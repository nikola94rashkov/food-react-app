import { useState, useEffect } from 'react';
import { getCurrentUserArticles } from '../../services/firebase';
import GridItem from '../GridItem/GridItem';

const ListMyRecipes = ({uid}) => {
    const [listItems, setListItems] = useState([]);

    useEffect(() =>{
        getCurrentUserArticles(uid)
            .then(res => {
                setListItems(res.docs.map(doc => ({...doc.data(), id: doc.id})))
            })
    }, [])

    return (
        <ul>
            { 
                listItems.length > 0 
                    ? listItems.map( card =>  <li key={card.id}><GridItem card={card} /></li> ) 
                    : <li><p>no recipes yet</p></li>
            }
        </ul>
    );
}

export default ListMyRecipes