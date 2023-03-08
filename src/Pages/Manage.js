import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import PersonalPhotos from "../Components/PersonalPhotos";
import Footer from "../Components/Footer";
import Profile from "../Components/Profile";

export default function Manage() {
  return (
    <>
      <Header />
      <Profile/>
      {/* <Hero /> */}
      <PersonalPhotos />
      <Footer />
    </>
  );
}
