import Slider from 'react-slick';
import styles from './products.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useContext, useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useParams } from 'react-router-dom';
import { LengthProvider, lengthContext } from '~/context/LengthCart';

function Products() {
    // const [title, setTitle] = useState('Card màn hình VGA RTX 2080 8GB')
    // const [price, setPrice] = useState(4890000)
    const {title, price, pricesale, id, idproduct} = useParams()
    let context = useContext(lengthContext)
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const imageLink = queryParams.get('imageLink');
    const AddCard = (IdUser, Idpro, title, price) => {
        
        fetch('http://localhost:3000/api/cartpost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({IdUser, Idpro, title, price, imageLink}),
        })
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                }
            })

            .then((data) => {
                if (data) {
                    
                    context.getcart()
                   
                }
                return data;
            });
            
    }
   

    const onHandleClick = (event) => {
       
    };
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className={styles.products}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>{title}</h2>
                    <div className={styles.warranty}>
                        <p>Tình trạng: Còn hàng</p>
                        <p>Bảo hành: 36 tháng</p>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.images}>
                        <div className={styles.main}>
                            <img src={imageLink} alt=''/>
                        </div>

                       

                        <div className={styles.infoitem}>
                            <ul>
                                <li>Bộ nhớ: 8GB GDDR6</li>
                                <li>Core Clock: 2655 MHz (Reference Card: 2535 MHz)</li>
                                <li>Kết nối: 2 x HDMI 2.1a / 2 x Cổng DisplayPort 1.4a</li>
                            </ul>

                            <ul>
                                <li>Giao diện bộ nhớ: 128-bit</li>
                                <li>Số nhân CUDA: 4352</li>
                                <li>Nguồn đề nghị: 500W</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.price}>
                        <div className={styles.genuineprice}>
                            Giá chính hãng: <span>{price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</span>
                        </div>
                        <div className={styles.buyprice}>
                            Giá bán: <span>{pricesale.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span> <span className={styles.vat}>(Giá đã bao gồm VAT)</span>
                        </div>

                        <div className={styles.gift}>
                            <div className={styles.title}>Khuyễn mãi - Quà tặng</div>
                            <ul className={styles.giftlists}>
                                <li>Chuột không dây EDRA EM604 trị giá 140.000đ</li>
                                <li>Trả góp lãi suất 0% áp dụng cho thẻ tín dụng Sacombank, VPbank.</li>
                                <li>
                                    Trả góp lãi suất ưu đãi áp dụng cho nhà tài chính HD Saison và ACS. Trả góp lãi suất
                                    uư đãi thông qua cổng MPOS áp dụng cho thẻ tín dụng: Citibank, Eximbank, HSBC, MSB,
                                    Techcombank, Nam Á, Shinhan bank, TP bank, Seabank, Kiên Long bank, OCB, VIB, ACB,
                                    MB, Vietcombank, SHB...
                                </li>
                            </ul>
                        </div>

                        <div className={styles.button}>
                            <button className={`${styles.btn} ${styles.btnbuy}`}>Mua ngay</button>
                            <button className={styles.btn} onClick={() => {AddCard(id, idproduct, title, pricesale, imageLink)}} >Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.feedbacks}>
                <div className={styles.evaluate}>
                    <h2>Đánh giá & Nhận xét</h2>
                    <div className={styles.feedback}>
                        <div className={styles.content}>
                            <p>0/5</p>
                            <FontAwesomeIcon className={styles.iconstar} icon={faStar} />
                            <FontAwesomeIcon className={styles.iconstar} icon={faStar} />
                            <FontAwesomeIcon className={styles.iconstar} icon={faStar} />
                            <FontAwesomeIcon className={styles.iconstar} icon={faStar} />
                            <FontAwesomeIcon className={styles.iconstar} icon={faStar} />
                        </div>
                        <div className={styles.btnfeedback}>
                            <button className={styles.btn}>Tất cả</button>
                            <button className={styles.btn}>5 sao</button>
                            <button className={styles.btn}>4 sao</button>
                            <button className={styles.btn}>3 sao</button>
                            <button className={styles.btn}>2 sao</button>
                            <button className={styles.btn}>1 sao</button>
                        </div>
                    </div>
                    <div className={styles.comment}>
                        <div className={styles.users}>
                            <FontAwesomeIcon className={styles.usericon} icon={faUser} />
                            <div className={styles.infouser}>
                                <div className={styles.username}>Văn Hoàng</div>
                                <div className={styles.userfeedback}>
                                    <FontAwesomeIcon className={styles.userstar} icon={faStar} />
                                    <FontAwesomeIcon className={styles.userstar} icon={faStar} />
                                    <FontAwesomeIcon className={styles.userstar} icon={faStar} />
                                    <FontAwesomeIcon className={styles.userstar} icon={faStar} />
                                    <FontAwesomeIcon className={styles.userstar} icon={faStar} />
                                </div>
                                <div className={styles.userdate}>
                                    <span className={styles.date}>2002-05-06</span>
                                    <span className={styles.time}>11:01</span>
                                    <span className={styles.productclass}>Phân loại hàng: vga máy tính</span>
                                </div>
                                <div className={styles.usercomment}>
                                    <p className={styles.contentcmt}>Sản phẩm tốt, đáng với giá tiền</p>
                                </div>
                            </div>

                            <button className={styles.btnfeedback}>Đánh giá của bạn</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
