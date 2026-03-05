/* eslint-disable no-unused-vars */

import style from "./App.module.css";
import AboutUS from "./section/AboutUs";
import Contact from "./section/Contact";

import Footer from "./section/Footer";
import Header from "./section/Header";
import Home from "./section/Home";
import Products from "./section/Products";
export default function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
        <Products />
        <AboutUS />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
