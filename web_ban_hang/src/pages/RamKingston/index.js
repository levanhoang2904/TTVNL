import styles from '~/pages/Card/card.module.scss';

import style from '~/components/SiderBar/category/category.module.scss';

import Categorys from '~/components/SiderBar/category';
import { useEffect, useState } from 'react';
function RamKingston() {
    const [rams, setRams] = useState([])
    useEffect(() => {
     fetch('http://localhost:3000/api/rams')
     .then((res) => {
         return res.json()
     })
 
     .then((data) => {
         setRams(data)
     });
    },[])
    return (
        <div className={styles.categorys}>
            {rams.map((ram) => (
                
                <Categorys product={ram} />
               
            ))}
        </div>
    );
}

export default RamKingston;
