import React from "react";
import styled from "styled-components";

export default function PhotoWall({ photos }) {
  // console.log(photos);
  return (
    <Wrapper>
      <div className="section section-center">
        <div className="photos__box">
          {photos.length > 0 &&
            photos.map((image) => {
              console.log(image);
              return (
                <div className="photo__box">
                  <img
                    key={image.itemId}
                    src={image.attachmentUrl}
                    alt={image.itemname}
                    className="photo"
                  ></img>
                  <div className="photo__info">
                    <span>{image.itemname}</span>
                    <span>{image.artist}</span>
                  </div>
                </div>
              );
            })}
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
