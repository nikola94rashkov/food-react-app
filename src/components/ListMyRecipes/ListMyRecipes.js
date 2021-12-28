import { useState, useEffect, useRef } from 'react';
import { getDynamicUserArticles } from '../../services/firebase';
import GridItem from '../GridItem/GridItem';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore, { Navigation } from 'swiper';

import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";

SwiperCore.use([Navigation]);

const ListMyRecipes = ({uid}) => {
    const [listItems, setListItems] = useState([]);

    useEffect(() =>{
        getDynamicUserArticles(uid, setListItems);
    }, [])

    return (
        <>
            <Swiper navigation={true} className="mySwiper">
                { 
                    listItems.length > 0 
                        ? listItems.map( card => <SwiperSlide key={card.id}><GridItem card={card} /></SwiperSlide> ) 
                        : <li><p>no recipes yet</p></li>
                }
            </Swiper>
        </>
    );
}

export default ListMyRecipes