import { useEffect, useState } from 'react';
import styles from './card.module.scss';
import card from '~/assets/card';
import Categorys from '~/components/SiderBar/category';
function Card() {

    const [cards, setCards] = useState([])
   useEffect(() => {
    fetch('http://localhost:3000/api/Cards')
    .then((res) => {
        return res.json()
    })

    .then((data) => {
        setCards(data)
    });
   },[])
        return (
            <div className={styles.categorys}>
                {cards.map((product) => (
                    <Categorys product={product} />
                ))}
            </div>
        );
}

export default Card;
