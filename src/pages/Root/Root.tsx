import React from 'react';
import { Outlet } from 'react-router-dom';
// Importing Components
import { Header, Footer } from '../../layouts';

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root;