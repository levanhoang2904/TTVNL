import { useEffect, useState } from 'react';
import styles from '~/pages/Card/card.module.scss';
import Categorys from '~/components/SiderBar/category';
function Home() {

    const [home, setHome] = useState([])
   useEffect(() => {
    fetch('http://localhost:3000/trangchu')
    .then((res) => {
        return res.json()
    })

    .then((data) => {
        setHome(data)
    });
   },[])
        return (
            <div className={styles.categorys}>
            {home.length > 0 &&  
                home.map((product) => (
                    <Categorys key={product.id} product={product} />
                ))}
        </div>
        );
}

export default Home;
