import { Children, createContext, useEffect } from "react";
import { useState } from "react";


 const lengthContext = createContext()

function LengthProvider ({children}) {
    let name = ""
    
    const [cart, setCart] = useState([]);
    const [length, setLength] = useState(0)
        // useEffect(()=> {
        //     fetch('http://localhost:3000/api/getcart')
        //     .then((res) => {
        //         return res.json();
        //     })

        //     .then((data) => {
        //         setCart(data);
        //         setLength(data.length);
               
        //     });
        // },[])

        const getcart = () => {
            fetch('http://localhost:3000/api/getcart?id=' + sessionStorage.getItem('id'))
            .then((res) => {
                if (res.status === 200) return res.json()
            })

            .then((data) => {
                setCart(data);
                setLength(data.length)
            });
        }
        
        const decreaseLength = () => {
            setLength(length - 1)
        }

        const resetLength = () => {
            setLength(0)
        }
    const value = {
        length,
        cart,
        getcart,
        resetLength,
        decreaseLength
    }


   
    return (

    <lengthContext.Provider value={value}>

            {children}
    </lengthContext.Provider>
    )
}

export {lengthContext, LengthProvider}