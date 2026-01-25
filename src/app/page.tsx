'use client'

import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import HeroCarousel from "./components/HeroCarousel";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TrendingBar from "./components/TrendingBar";
import CategoryMainPage from "./components/category/page/CategoryMainPage";

export default function Home() {
  return (
    <>
      <ToastContainer theme="dark" />
      <HeroCarousel />
      <TrendingBar />
      <CategoryMainPage />
      {/* <BlogList /> */}

    </>
  );
}
