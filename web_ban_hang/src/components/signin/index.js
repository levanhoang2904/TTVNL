import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './signin.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { lengthContext } from '~/context/LengthCart';

function Singin({ onClickHidden, onHandleLogged }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const value = useContext(lengthContext)
     
    const handleLogin = () => {
       
        try {
             fetch('http://localhost:3000/logins', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })
                .then((res) => {
                    if (res.status === 200) {
                        return res.json();
                    }
                })

                .then((data) => {
                    if (data) {
                        console.log(data);
                        sessionStorage.setItem('id', data.ketqua[0].id)
                        sessionStorage.setItem('name', data.ketqua[0].Hoten)
                        
                        onClickHidden();
                        onHandleLogged();
                        value.getcart()
                    }
                    return data;
                });
        } catch (error) {
            console.error('Lỗi đăng nhập:', error.message);
        }
    };
    return (
        <div className={styles.singin}>
            <div className={styles.header}>
                <span>Đăng nhập</span>
                <FontAwesomeIcon onClick={onClickHidden} className={styles.icon} icon={faXmark} />
            </div>

            <form>
                <div className={styles.email}>
                    <label>Email</label>

                    <input name="taikhoan" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className={styles.password}>
                    <label>Mật khẩu</label>
                    <input
                        name="pass"
                        placeholder="Mật Khẩu"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </form>
            <span className={styles.forgotpas}>Quên Mật Khẩu?</span>

            <button onClick={handleLogin} className={styles.button}>
                <div className={styles.btnlogin}>Đăng nhập</div>
            </button>

            <div className={styles.signanotherway}>
                <span className={styles.text}>Hoặc đăng nhập bằng</span>

                <div className={styles.btnsigin}>
                    <button className={`${styles.google} ${styles.btn}`}>
                        <FontAwesomeIcon className={styles.icon} icon={faGoogle} />
                        google
                    </button>
                    <button className={`${styles.facebook} ${styles.btn}`}>
                        <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
                        facebook
                    </button>
                </div>
            </div>

            <div className={styles.register}>
                <span>
                    Bạn chưa có tài khoản? <a>Đăng ký ngay!</a>
                </span>
            </div>
        </div>
    );
}

export default Singin;
