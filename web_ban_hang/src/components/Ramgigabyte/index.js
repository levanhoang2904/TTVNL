import rams from '~/assets/ramgigabyte';
import Categorys from '~/components/SiderBar/category';
import styles from '~/pages/Card/card.module.scss';

function RamGigabyte() {
    return (
        <div className={styles.categorys}>
            {rams.map((ram) => (
                <Categorys product={ram} />
            ))}
        </div>
    );
}

export default RamGigabyte;
