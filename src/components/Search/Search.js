import { useEffect,useState } from 'react';
import { getDocumentByName } from '../../services/firebase';
import GridItem from '../GridItem/GridItem';

import './Search.scss';

const Search = () => {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    useEffect(() => {
        getDocumentByName(value, setItems)
    }, [value])

    return (
        <div className="form-search">
            <label htmlFor="search-field">Search for recipe</label>

            <input type="text" id="search-field" name="search-field" onChange={(e) => setValue(e.target.value)} />

            <ul className="search-list">
                { items.length > 0 ? items.map( card => <li key={card.id}><GridItem card={card} /></li> ) : <></> }   
            </ul>
        </div>
    );
}

export default Search;