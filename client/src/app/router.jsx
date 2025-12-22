import { Route, Routes } from 'react-router-dom';

import Home from '/src/pages/Home';

import NewListing from '/src/pages/NewListing';
import MyListings from '/src/pages/MyListings';
import EditListing from '/src/pages/EditListing';

import Signup from '/src/pages/auth/Signup';
import Signin from '/src/pages/auth/Signin';

import Profile from '/src/pages/Profile';

import Favorites from '/src/pages/Favorites';
import Cart from '/src/pages/Cart';

import NotFound from '/src/pages/static/404';
import About from '/src/pages/static/About';
import Contact from '/src/pages/static/Contact';
import Privacy from '/src/pages/static/Privacy';
import Services from '/src/pages/static/Services'; 
import FAQ from '/src/pages/static/Faq';
import HelpCenter from '/src/pages/static/Help';

const AppRouter = () => {
    return (
        <Routes>
            <Route  path="/" element={<Home />} />
            
            <Route  path="/auth/signup" element={<Signup />} />
            <Route  path="/auth/login" element={<Signin />} />
            
            <Route  path="/user/profile" element={<Profile />} />
            <Route  path="/user/favorites" element={<Favorites />} />
            <Route  path="/user/cart" element={<Cart />} />
            <Route  path="/user/myListings" element={<MyListings />} />

            <Route path="/listings/edit/:listingId" element={<EditListing />} />
            <Route  path="/listings/new" element={<NewListing />} />
           
            {/* Static pages */}
            <Route  path="/about" element={<About />} />
            <Route  path="/contact" element={<Contact />} />
            <Route  path="/privacy" element={<Privacy />} />
            <Route  path="/services" element={<Services />} /> 
            <Route  path="/faq" element={<FAQ />} />
            <Route  path="/help" element={<HelpCenter />} />\

            <Route  path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;
