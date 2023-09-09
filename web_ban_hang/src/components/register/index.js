import styles from './register.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function Register({ onClickHidden, onHandleLogged }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        try {
            fetch('http://localhost:3000/create-users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            })
                .then((res) => {
                    if (res.status === 200) {
                        return res.json();
                    } else if (res.status === 404) {
                        alert('Hệ thống lỗi');
                    } else if (res.status === 500) {
                        alert('Email đã tồn tại');
                    } else if (res.status === 501) {
                        alert('Vui lòng nhập thông tin');
                    }
                })

                .then((data)=> {
                    
                        if (data) {
                            onClickHidden()
                        }
                    
                }) 
        } catch (error) {
            console.error('Lỗi đăng nhập:', error.message);
        }
    };

    return (
        <div className={styles.singin}>
            <div className={styles.header}>
                <span>Đăng Ký</span>
                <FontAwesomeIcon onClick={onClickHidden} className={styles.icon} icon={faXmark} />
            </div>

            <form>
                <div className={styles.name}>
                    <label>Họ và tên</label>
                    <input onChange={(e) => setName(e.target.value)} placeholder="Nhập họ và tên" />
                </div>

                <div className={styles.email}>
                    <label>Email</label>

                    <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="text" />
                </div>

                <div className={styles.password}>
                    <label>Mật khẩu</label>
                    <input onChange={(e) => setPassword(e.target.value)} placeholder="Mật Khẩu" type="password" />
                </div>
            </form>

            <button className={styles.button}>
                <div onClick={handleLogin} className={styles.btnlogin}>
                    Tạo tài khoản
                </div>
            </button>

            <div className={styles.signanotherway}>
                <span className={styles.text}>Hoặc đăng ký bằng</span>

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
                    Bạn đã có tài khoản? <a>Đăng nhập ngay!</a>
                </span>
            </div>
        </div>
    );
}

export default Register;
