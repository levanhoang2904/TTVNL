import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './footer.module.scss';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerlists}>
                <div className={styles.customer}>
                    <h2 className={styles.title}>Chăm sóc khách hàng</h2>
                    <div className={styles.content}>
                        <a>Trung tâm trợ giúp</a>
                        <a>HKH-Technology</a>
                        <a>Hướng dẫn sử dụng</a>
                    </div>
                </div>

                <div className={styles.introduction}>
                    <h2 className={styles.title}>Giới thiệu</h2>
                    <div className={styles.content}>
                        <a>Giới thiệu</a>
                        <a>Tuyển dụng</a>
                        <a>Điều khoản</a>
                    </div>
                </div>

                <div className={styles.category}>
                    <h2 className={styles.title}>Danh mục</h2>
                    <div className={styles.content}>
                        <a>Ram</a>
                        <a>SSD</a>
                        <a>HDD</a>
                        <a>Card</a>
                        <a>CPU</a>
                        <a>Mainboard</a>
                        <a>Nguồn</a>
                    </div>
                </div>

                <div className={styles.follow}>
                    <h2 className={styles.title}>Theo dõi</h2>
                    <div className={styles.content}>
                        <a>
                            <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
                            Facebook
                        </a>
                        <a>
                            <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
