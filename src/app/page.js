'use client'

import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <BlogList />
      <Footer />

    </>
  );
}
