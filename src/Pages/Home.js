import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Photos from "../Components/Photos";
import Footer from "../Components/Footer";
import PhotoWall from "../Components/PhotoWall";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PhotoWall/>
      <Footer />
    </>
  );
}
