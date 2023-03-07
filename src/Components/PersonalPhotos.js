import React from "react";
import styled from "styled-components";
import Photos from "./Photos";
import { Link } from "react-router-dom";

export default function PersonalPhotos() {
  return (
    <Wrapper>
      <div className="section section-center">
        <Link to="insert" className="btn">
          Insert an artwork
        </Link>
        <Link to="/" className="btn">
          Return Home
        </Link>
        <Photos />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  a {
    margin-right: 2rem;
  }
`;
