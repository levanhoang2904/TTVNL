import { faChevronRight, faList } from '@fortawesome/free-solid-svg-icons';
import styles from './sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ramImage from '~/assets/img/ram.png';
import ssdImage from '~/assets/img/ssd.png';
import cardImage from '~/assets/img/vga.png';
import keyboardImage from '~/assets/img/banphim.png';

import { Link, Route } from 'react-router-dom';

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.category}>
                <div className={styles.iconcategory}>
                    <FontAwesomeIcon icon={faList} />
                    <h2>Danh mục</h2>
                </div>

                <div className={styles.categorylists}>
                    <div className={styles.categorylist}>
                        <img className={styles.iconlist} src={ramImage} alt='' />
                        <span>
                            <Link to = '/RamKingston'>Ram</Link>
                            <div className={styles.ramlists}>
                                <div className={styles.ramlist}>
                                    <Link to="/RamKingston">Ram Kingston</Link>
                                </div>
                                <div className={styles.ramlist}>
                                    <Link to="/RamGigabyte">Ram Gigabyte</Link>
                                </div>
                                <div className={styles.ramlist}>
                                    <Link to="/RamGSkill">Ram G.Skill</Link>
                                </div>

                                <div className={styles.ramlist}>
                                    <Link to="/RamAdata">Ram Adata</Link>
                                </div>
                            </div>
                        </span>
                        <div className={styles.iconright}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                    <div className={styles.categorylist}>
                        <img className={styles.iconlist} src={ssdImage} />
                        <span>
                            <Link to = ''>SSD</Link>
                            <div className={styles.ramlists}>
                                <div className={styles.ramlist}>
                                    <Link to="">SSD Kingston</Link>
                                </div>
                                <div className={styles.ramlist}>
                                    <Link to="">SSD Kingmax</Link>
                                </div>
                                <div className={styles.ramlist}>
                                    <Link to="">SSD G.SamSung</Link>
                                </div>
                                <div className={styles.ramlist}>
                                    <Link to="">SSD WD</Link>
                                </div>
                            </div>
                        </span>
                        <div className={styles.iconright}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>

                    <div className={styles.categorylist}>
                        <img className={styles.iconlist} src={keyboardImage} />
                        <span>
                        <Link to = ''>HDD</Link>
                            <div className={styles.ramlists}>
                                <div className={styles.ramlist}>
                                    <Link to="">HDD</Link>
                                </div>
                                <div className={styles.ramlist}>
                                    <Link to="">Ổ cứng lưu trũ camera</Link>
                                </div>
                                <div className={styles.ramlist}>
                                    <Link to="">Ổ đĩa quang</Link>
                                </div>
                            </div>
                        </span>
                        <div className={styles.iconright}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                    <div className={styles.categorylist}>
                        <img className={styles.iconlist} src={cardImage} />
                        <span>
                            <Link to = "/card">Card</Link>
                            <div className={styles.ramlists}>
                                <div className={styles.ramlist}>
                                    <Link to="">Card Asus</Link>
                                </div>
                                <div className={styles.ramlist}>
                                    <Link to="">Card Msi</Link>
                                </div>
                                <div className={styles.ramlist}>
                                    <Link to="">Card Gigabyte</Link>
                                </div>
                                <div className={styles.ramlist}>
                                    <Link to="">Card Zotac</Link>
                                </div>
                            </div>
                        </span>
                        <div className={styles.iconright}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                    <div className={styles.categorylist}>
                        <img className={styles.iconlist} src={keyboardImage} />
                        <span>
                        <Link to = ''>CPU</Link>
                            <div className={styles.ramlists}>
                                <div className={styles.ramlist}>
                                    <Link to="/">CPU Intel</Link>
                                </div>
                                <div className={styles.ramlist}>
                                    <Link to="/">CPU AMD</Link>
                                </div>
                            </div>
                        </span>
                        <div className={styles.iconright}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>

                    <div className={styles.categorylist}>
                        <img className={styles.iconlist} src={keyboardImage} />
                        <span>
                            <Link to = ''>MainBoard</Link>
                            <div className={styles.ramlists}>
                                <div className={styles.ramlist}>
                                    <Link to="/">MainBoard Asus</Link>
                                </div>
                                <div className={styles.ramlist}>
                                    <Link to="/">MainBoard Msi</Link>
                                </div>
                                <div className={styles.ramlist}>
                                    <Link to="/">MainBoard Gigabyte</Link>
                                </div>
                            </div>
                        </span>
                        <div className={styles.iconright}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>

                   
                </div>
            </div>
            {/* <Routes>
                    <Route path="/" element={<Card />} />
                    <Route path="/RamKingston" element={<Ram />} />
                    <Route path="/RamGigabyte" element={<RamGigabyte />} />
                </Routes> */}

            {/* <Categorysale /> */}
        </div>
    );
}

export default Sidebar;
