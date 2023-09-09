import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './cart.module.scss';
import { faClose, faFaceSadCry } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useContext } from 'react';
import products from '~/assets/card';
import { lengthContext } from '~/context/LengthCart';



function Cart(check) {
  



    const [amount, setAmount] = useState(0);
    const [cart, setCart] = useState([]);
    
    const context = useContext(lengthContext)
    const increaseAmount = (count, idcart) => {
       
            
        
            fetch(`http://localhost:3000/api/incr?idcart=${idcart}`)
            .then((res) => {
                return res.json()
            })

            .then((data) => {
                setAmount(count)
            });
        
    };
    const decreaseAmount = (count, idcart) => {
        if (count > 1) {
            
        
            fetch(`http://localhost:3000/api/decr?idcart=${idcart}`)
    .then((res) => {
        return res.json()
    })

    .then((data) => {
        setAmount(count)
    });
        }
    };
    const [id, setId] = useState(0)
    useEffect(() => {
        
            setId(sessionStorage.getItem('id'))
       
    },[check])

    useEffect(() => {
        if (id !== 0) {
        fetch('http://localhost:3000/api/getcart?id=' + sessionStorage.getItem('id'))
            .then((res) => {
                if (res.status === 200) return res.json()
            })

            .then((data) => {
                setCart(data);
               
            });
        }
    }, [id, amount]);
    

    
    const deleteItem = (id) => {
           try {
            fetch ('http://localhost:3000/api/deleteItem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            })
                .then ((res) => {
                    if (res.status === 200) return res.json()
                }) 
                .then ((data) => {
                    if (data) {
                        const newCart = cart.filter(product => product.idCart !== id)
                        setCart(newCart)
                        context.decreaseLength()
                    }
                })
        
           } catch (error) {
                console.log(error)
           }
    }

    const order = ()=> {
        fetch('http://localhost:3000/api/insertHD?id=' + sessionStorage.getItem('id'))
           .then((res) => {
                return res.json()
           })

           .then((data) => {

           })
    }

    const [sum, setSum] = useState(0); // State để lưu tổng tiền

    useEffect(() => {
        // Tính tổng tiền từ danh sách sản phẩm trong giỏ hàng
        const totalSum = cart.reduce((accumulator, product) => {
            return accumulator + product.Thanhtien;
        }, 0);
        
        setSum(totalSum); // Cập nhật state tổng tiền
    }, [cart]);

    return (
        <div className={styles.cart}>
            <div className={styles.wrap}>
                {cart.length > 0 ? (
                    <div className={styles.havecart}>
                        {cart.map((product, index) => (
                           
                            <div className={styles.cartlist}>
                                <img
                                    className={styles.imgproduct}
                                    src={product.img} alt = ""
                                />
                                <div className={styles.infoproduct}>
                                    <p>{product.title}</p>
                                </div>
                                <div className={styles.priceproduct}>
                                    <p>{(product.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</p>
                                </div>
                                <div className={styles.amount}>
                                    <button onClick={() => {
                                        increaseAmount(product.quantity, product.idCart)
                                    }}>+</button>
                                    <span>{product.quantity}</span>
                                    <button onClick={() => {decreaseAmount(product.quantity, product.idCart)}}>-</button>
                                </div>
                                <div className = {styles.thanhtien}>{(product.Thanhtien).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</div>
                                <button onClick={() => {
                                       
                                        deleteItem(product.idCart)
                                    }} className={styles.btnClose}> <FontAwesomeIcon className={styles.iconclose} icon={faClose} /></button>
                            </div>
                        ))}
                        <div className = {styles.sub}>
                        Tổng tiền: 
                           <p>
                                    {(sum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ
                           </p>                        
                           </div>
                           <button onClick={order} className = {styles.datmua}>Đặt mua</button>
                    </div>
                ) : (
                    <div className={styles.nocart}>
                        <FontAwesomeIcon className={styles.icon} icon={faFaceSadCry} />
                        <h1>Hiện tại chưa có sản phẩm trong giỏ hàng</h1>
                    </div>
                )}
                {/*  */}
            </div>
        </div>
    );
}

export default Cart;
