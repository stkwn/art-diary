import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PhotoWall from "./PhotoWall";
import { Link } from "react-router-dom";

export default function PersonalPhotos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const token = process.env.REACT_APP_TOKEN;
        const response = await fetch(
          "https://rbm7x5e9gl.execute-api.us-east-1.amazonaws.com/dev/manageItems",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const photos = await response.json();
        console.log(photos);
        setPhotos(photos.items);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <Wrapper>
      <div className="section section-center">
        <Link to="insert" className="btn">
          Insert an artwork
        </Link>
        <Link to="/" className="btn">
          Return Home
        </Link>
        <PhotoWall photos={photos} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  a {
    margin-right: 2rem;
  }
`;
