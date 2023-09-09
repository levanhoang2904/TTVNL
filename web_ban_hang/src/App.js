import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import { publicRoutes } from './Routes';
// import Slider from './components/Slider/Slider';
// import Sidebar from './components/SiderBar';
import Login from './components/login';
import { Fragment, useState } from 'react';
// import { click } from '@testing-library/user-event/dist/click';
// import DefaultLayout from './pages/DefaultLayout';

import Footer from './components/Footer';
import DefaultLayout from './pages/DefaultLayout';
import products from './assets/card';
import Products from './pages/DefaultLayout/Products';
import Cart from './pages/Cart';
import ListProducts from './components/ListProducts';

function App() {
    const [activelog, setactivelog] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const handleclickbutton = () => {
        setShowLogin(true);
    };
    const [check, setCheck] = useState(false)
    const [cartQuantity, setQuantityCart] = useState(0);

    const clickHiddenForm = () => {
        setShowLogin(false);
        setShowRegis(false);
        setShowSign(false);
        setCheck(!check)
    };

   

   

    const [showSign, setShowSign] = useState(false);
    const [showRegis, setShowRegis] = useState(false);

    const clickShowSign = () => {
        setShowSign(true);
    };

    const clickShowRegister = () => {
        setShowRegis(true);
        console.log(showLogin);
    };

    const activeLogged = () => {
        setactivelog(!activelog);
    };

    return (
        <Router>
            <div className="App">
                {activelog ? (
                    <Header
                        onHandleClick={handleclickbutton}
                        onClickAppearSign={clickShowSign}
                        onClickAppearRegis={clickShowRegister}
                        onChangActive={activeLogged}
                        
                        activelog
                    />
                ) : (
                    <Header
                        onHandleClick={handleclickbutton}
                        onClickAppearSign={clickShowSign}
                        onClickAppearRegis={clickShowRegister}
                        check = {check}
                    />
                )}
                {/* <Slider />
                <Sidebar /> */}
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout === null ? Fragment : DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        {Page === Products ? (
                                            <Page />
                                        ) : Page === Cart ? (
                                            <Page check = {check} />
                                        ) : (
                                            <Page />
                                        )}
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
                <ListProducts/>
                {/* <Login /> */}
                {showLogin && showSign ? (
                    <Login onHandleClick={clickHiddenForm} showSign showRegis={false} logged={activeLogged} />
                ) : showLogin && showRegis ? (
                    <Login onHandleClick={clickHiddenForm} showSign={false} showRegis logged={activeLogged} />
                ) : (
                    ''
                )}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
