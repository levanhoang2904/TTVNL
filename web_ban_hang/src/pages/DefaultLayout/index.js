import { Children } from 'react';
import Header from '~/components/Header';
import Sidebar from '~/components/SiderBar';
import Slider from '~/components/Slider/Slider';
import Login from '~/components/login';
import styles from './defaultlayout.module.scss';
import SimpleSlider from '~/components/Slider/Slider';
function DefaultLayout({ children }) {
    return (
        <div>
            <SimpleSlider />
            <div className={styles.container}>
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
