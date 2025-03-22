'use client'

import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <ToastContainer theme="dark" />
      <Navbar />
      <BlogList />
      <Footer />

    </>
  );
}
