import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home'));
const NewListing = lazy(() => import('@/pages/NewListing'));
const MyListings = lazy(() => import('@/pages/MyListings'));
const EditListing = lazy(() => import('@/pages/EditListing'));
const Signup = lazy(() => import('@/pages/auth/Signup'));
const Signin = lazy(() => import('@/pages/auth/Signup'));
const Profile = lazy(() => import('@/pages/Profile'));
const Favorites = lazy(() => import('@/pages/Favorites'));
const Cart = lazy(() => import('@/pages/Cart'));
const NotFound = lazy(() => import('@/pages/static/404'));
const About = lazy(() => import('@/pages/static/About'));
const Contact = lazy(() => import('@/pages/static/Contact'));
const Privacy = lazy(() => import('@/pages/static/Privacy'));
const Services = lazy(() => import('@/pages/static/Services'));
const FAQ = lazy(() => import('@/pages/static/Faq'));
const HelpCenter = lazy(() => import('@/pages/static/Help'));

const AppRouter = () => {
    return (
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
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
        </Suspense>
    );
};

export default AppRouter;
