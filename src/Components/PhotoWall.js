import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { publicItem } from "../Api/ItemApi";
import { Link } from "react-router-dom";

export default function PhotoWall({ }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await publicItem()
      console.log("response", response)
      setPhotos(response.items);



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

const Wrapper = styled.section`
  .photos__box {
    display: grid;
    gap: 2rem;
  }

  .photo__box {
    position: relative;
    height: 18rem;
  }

  .photo__box:hover {
    .photo__info {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .photo__info {
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(100%);
    opacity: 0;
  }

  .photo {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 576px) {
    .photos__box {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
`;
