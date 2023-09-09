import styles from './show.module.scss';

function Show({ imageitem }) {
    return (
        <div className={styles.wrap}>
            <img src={imageitem.image} alt={imageitem.alt} className={`${styles.img}`} />
        </div>
        // {images.map((image) => {
        //     return (
        //         <div className={styles.imageitem}>
        //             <img src={image.image} />
        //         </div>
        //     );
        // })}
    );
}

export default Show;
