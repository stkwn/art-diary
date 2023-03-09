import React from "react";
import styled from "styled-components";

export default function PhotoWall({ photos }) {
  return (
    <Wrapper>
      <div className="section section-center">
        <div className="photos__box">
          {photos.length > 0 &&
            photos.map((image) => (
              <div className="photo__box">
                <img
                  key={image.itemId}
                  src={image.attachementUrl}
                  alt={image.itemName}
                  className="photo"
                ></img>
              </div>
            ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .photos__box {
    display: grid;
    gap: 2rem;
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
