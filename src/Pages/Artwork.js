import React from "react";
import { useParams } from "react-router-dom";

import Header from "../Components/Header";
import Hero from "../Components/Hero";

import Footer from "../Components/Footer";
import EditPhoto from "../Components/EditPhoto";

export default function Artwork() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <Hero />
      <EditPhoto itemId={id} />
      <Footer />
    </>
  );
}
