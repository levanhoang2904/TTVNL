import products from '~/assets/card';
import RamGigabyte from '~/components/Ramgigabyte';
import Card from '~/pages/Card';
import Cart from '~/pages/Cart';
import Home from '~/pages/DefaultLayout/Home';
import Products from '~/pages/DefaultLayout/Products';
import Search from '~/pages/DefaultLayout/Search/Search';
import Ram from '~/pages/RamKingston';

//public route
const publicRoutes = [
    { path: '/card', component: Card },
    {path: '/', component: Home},
    {path: '/search/:key', component: Search},
    { path: '/RamKingston', component: Ram },
    { path: '/RamGigabyte', component: RamGigabyte },
    { path: '/products/:title/:price/:pricesale/:id/:idproduct', component: Products, layout: null },
    { path: '/carts', component: Cart, layout: null },
];

// privateroute
const privateRoutes = [];

export { publicRoutes, privateRoutes };
