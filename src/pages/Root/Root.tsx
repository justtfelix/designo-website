import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../layouts';

function Root() {
  return (
    <>
      <Header isLightBg={true} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root;