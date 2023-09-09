import styles from './slider.module.scss';

import images from '../images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Show from './Show';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', right: '10px' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', left: '10px', zIndex: '2' }}
            onClick={onClick}
        />
    );
}
export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplaySpeed: 2000,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    // const [imgState, setImgState] = useState(0);
    // const handleNext = () => {
    //     if (imgState == images.length - 1) setImgState(0);
    //     else setImgState(imgState + 1);
    // };

    // const handlePrev = () => {
    //     if (imgState == 0) setImgState(images.length - 1);
    //     else setImgState(imgState - 1);
    // };

    // useEffect(() => {
    //     const timeout = setTimeout(handleNext, 2000);

    //     return () => clearTimeout(timeout);
    // }, [imgState]);
    return (
        <div className={styles.slider}>
            <Slider {...settings}>
                {images.map((image) => {
                    return (
                        <div>
                            <Show imageitem={image} />
                        </div>
                    );
                })}
                {/*             
            <FontAwesomeIcon onClick={handlePrev} className={`${styles.left} ${styles.icon}`} icon={faAngleLeft} />
            <FontAwesomeIcon onClick={handleNext} className={`${styles.right} ${styles.icon}`} icon={faAngleRight} /> */}
            </Slider>
        </div>
    );
}
