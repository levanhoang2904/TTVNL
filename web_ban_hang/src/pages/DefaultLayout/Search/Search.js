import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Categorys from "~/components/SiderBar/category";
import styles from '~/pages/Card/card.module.scss';

function Search() {
    const [result, setResult] = useState([])
    const {key} = useParams()
    console.log(key)
    useEffect(() => {
        fetch('http://localhost:3000/api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({key}),
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json()
        })
        .then((data) => {
            setResult(data)
        })
    },[])
    console.log(result)
    return ( 
        <div className={styles.categorys}>
             {result.length > 0 &&  
                result.map((product) => (
                    <Categorys key={product.id} product={product} />
                ))}
          
        </div>
     );
}

export default Search;