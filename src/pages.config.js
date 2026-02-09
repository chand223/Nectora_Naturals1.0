import Home from './pages/Home';
// import Shop from './pages/Shop.jsx';
import ProductDetail from './pages/ProductDetail';
import OurStory from './pages/OurStory';
import Rituals from './pages/Rituals';
// import Contact from './pages/Contact.jsx';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Shop": Shop,
    "ProductDetail": ProductDetail,
    "OurStory": OurStory,
    "Rituals": Rituals,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};