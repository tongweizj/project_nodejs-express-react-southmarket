import { Route, Routes } from 'react-router-dom';
import Home from '/src/pages/Home';
import Favorites from '/src/pages/Favorites';
import Signup from '/src/pages/Signup';
import Signin from '/src/pages/Signin';
import NotFound from '/src/pages/NotFound';
import Profile from '/src/pages/Profile';
import NewListing from '/src/pages/NewListing';
import Cart from '/src/pages/Cart';
import MyListings from '/src/pages/MyListings';
import About from '/src/pages/About';
import Contact from '/src/pages/Contact';
import Privacy from '/src/pages/Privacy';
import Favourites from '/src/pages/Favourites';
import EditListing from '/src/pages/EditListing';
import Services from '/src/pages/Sertvices'; 
import FAQ from '/src/pages/Faq';
import HelpCenter from '/src/pages/Help';

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="*" element={<NotFound />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/favorites" element={<Favorites />} />
            <Route exact path="/newListing" element={<NewListing />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/myListings" element={<MyListings />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/privacy" element={<Privacy />} />
            <Route exact path="/favourites" element={<Favourites />} />
            <Route path="/listings/edit/:listingId" element={<EditListing />} />
            <Route exact path="/services" element={<Services />} /> 
            <Route exact path="/faq" element={<FAQ />} />
            <Route exact path="/help" element={<HelpCenter />} />
        </Routes>
    );
};

export default AppRouter;
