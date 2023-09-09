
import styles from './listproducts.module.scss';
import { Link } from 'react-router-dom';


function ListProducts() {
    
    return (
        <div className={styles.listproducts}>
            <h2>Sản phẩm hot</h2>

            <div className={styles.list}>
    
                    <div className={styles.product}>
                        <Link
                            onClick={() => {
                                window.scroll({ top: 0 });
                            }}
                            to="/products"
                            className={styles.category}
                        >
                            <img
                                className={styles.img}
                                src="https://product.hstatic.net/1000386963/product/kit_ram_kingston_ddr5_64gb_5200__32gb_2__beast_rgb__1__c918113c906d43d9af2a3e1db21c5461_master.png" alt=''
                            />
                            <div className={styles.info}>
                                Ram Kingston 16GB DDR3-1600 CL10 (Kit of 2) HyperX Plug n Play
                            </div>
                            <div className={styles.prices}>
                                <div className={styles.price}>
                                    <span>1.020.000đ</span> {/*định dạng dấu . */}
                                </div>
                                <div className={styles.pricesale}>
                                    <span>800.500đ</span>
                                </div>
                            </div>
                            <div className={styles.discount}>
                                <span>20% Giảm</span>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.product}>
                        <Link
                            onClick={() => {
                                window.scroll({ top: 0 });
                            }}
                            to="/products"
                            className={styles.category}
                        >
                            <img
                                className={styles.img}
                                src="https://product.hstatic.net/1000386963/product/kit_ram_kingston_ddr5_64gb_5200__32gb_2__beast_rgb__1__c918113c906d43d9af2a3e1db21c5461_master.png"
                           alt='' />
                            <div className={styles.info}>
                                Ram Kingston 16GB DDR3-1600 CL10 (Kit of 2) HyperX Plug n Play
                            </div>
                            <div className={styles.prices}>
                                <div className={styles.price}>
                                    <span>1.020.000đ</span> {/*định dạng dấu . */}
                                </div>
                                <div className={styles.pricesale}>
                                    <span>800.500đ</span>
                                </div>
                            </div>
                            <div className={styles.discount}>
                                <span>20% Giảm</span>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.product}>
                        <Link
                            onClick={() => {
                                window.scroll({ top: 0 });
                            }}
                            to="/products"
                            className={styles.category}
                        >
                            <img
                                className={styles.img}
                                src="https://product.hstatic.net/1000386963/product/kit_ram_kingston_ddr5_64gb_5200__32gb_2__beast_rgb__1__c918113c906d43d9af2a3e1db21c5461_master.png"
                            alt= ''/>
                            <div className={styles.info}>
                                Ram Kingston 16GB DDR3-1600 CL10 (Kit of 2) HyperX Plug n Play
                            </div>
                            <div className={styles.prices}>
                                <div className={styles.price}>
                                    <span>1.020.000đ</span> {/*định dạng dấu . */}
                                </div>
                                <div className={styles.pricesale}>
                                    <span>800.500đ</span>
                                </div>
                            </div>
                            <div className={styles.discount}>
                                <span>20% Giảm</span>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.product}>
                        <Link
                            onClick={() => {
                                window.scroll({ top: 0 });
                            }}
                            to="/products"
                            className={styles.category}
                        >
                            <img
                                className={styles.img}
                                src="https://product.hstatic.net/1000386963/product/kit_ram_kingston_ddr5_64gb_5200__32gb_2__beast_rgb__1__c918113c906d43d9af2a3e1db21c5461_master.png"
                            alt=''/>
                            <div className={styles.info}>
                                Ram Kingston 16GB DDR3-1600 CL10 (Kit of 2) HyperX Plug n Play
                            </div>
                            <div className={styles.prices}>
                                <div className={styles.price}>
                                    <span>1.020.000đ</span> {/*định dạng dấu . */}
                                </div>
                                <div className={styles.pricesale}>
                                    <span>800.500đ</span>
                                </div>
                            </div>
                            <div className={styles.discount}>
                                <span>20% Giảm</span>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.product}>
                        <Link
                            onClick={() => {
                                window.scroll({ top: 0 });
                            }}
                            to="/products"
                            className={styles.category}
                        >
                            <img
                                className={styles.img}
                                src="https://product.hstatic.net/1000386963/product/kit_ram_kingston_ddr5_64gb_5200__32gb_2__beast_rgb__1__c918113c906d43d9af2a3e1db21c5461_master.png"
                            alt=''/>
                            <div className={styles.info}>
                                Ram Kingston 16GB DDR3-1600 CL10 (Kit of 2) HyperX Plug n Play
                            </div>
                            <div className={styles.prices}>
                                <div className={styles.price}>
                                    <span>1.020.000đ</span> {/*định dạng dấu . */}
                                </div>
                                <div className={styles.pricesale}>
                                    <span>800.500đ</span>
                                </div>
                            </div>
                            <div className={styles.discount}>
                                <span>20% Giảm</span>
                            </div>
                        </Link>
                    </div>
                    
                   
                    
            
            </div>
        </div>
    );
}

export default ListProducts;
