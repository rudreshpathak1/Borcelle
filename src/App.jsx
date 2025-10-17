import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Popular from "./components/Popular";
import Banner from "./components/Banner";
import Desert from "./components/Desert";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Menu from "./components/Menu"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { HashRouter as Router } from 'react-router-dom';
import About from "./components/About";
import Special from "./components/Special";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Order from "./components/Order";
import Offer from "./components/Offer";
import AdminPage from './AdminPage'; // Admin page import

function App() {
  return (
    <Router>
      {/* Global Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products />
              <Popular />
              <Banner />
              <Desert />
              <Testimonials />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/special" element={<Special />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/offer" element={<Offer />} />

        {/* Admin Page */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      {/* Global Footer */}
      <Footer />
    </Router>
  );
}

export default App;
