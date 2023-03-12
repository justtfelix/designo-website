import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Root, Home, Design, About, Locations, Contact } from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} >
      <Route index element={<Home />} />
      <Route path="design/:category" element={<Design />} />
      <Route path="about" element={<About />} />
      <Route path="locations" element={<Locations />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

export default router;