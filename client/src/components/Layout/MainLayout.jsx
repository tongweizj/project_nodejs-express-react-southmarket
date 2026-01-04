import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-7xl py-10 px-4">
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;