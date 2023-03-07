import React, { useState, useEffect } from "react";
import { FaBox } from "react-icons/fa";
import styled from "styled-components";

const photos = [
  {
    id: 1,
    name: "image 1",
    url: "./upload/h01.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero maiores odio impedit et nemo voluptate totam facilis, commodi sunt nobis!",
  },
  {
    id: 1,
    name: "image 2",
    url: "./upload/h02.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero maiores odio impedit et nemo voluptate totam facilis, commodi sunt nobis!",
  },
  {
    id: 1,
    name: "image 3",
    url: "./upload/h03.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero maiores odio impedit et nemo voluptate totam facilis, commodi sunt nobis!",
  },
  {
    id: 1,
    name: "image 4",
    url: "./upload/h04.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero maiores odio impedit et nemo voluptate totam facilis, commodi sunt nobis!",
  },
  {
    id: 1,
    name: "image 5",
    url: "./upload/h05.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero maiores odio impedit et nemo voluptate totam facilis, commodi sunt nobis!",
  },
  {
    id: 1,
    name: "image 6",
    url: "./upload/h06.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero maiores odio impedit et nemo voluptate totam facilis, commodi sunt nobis!",
  },

  {
    id: 1,
    name: "image 1",
    url: "./upload/h01.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero maiores odio impedit et nemo voluptate totam facilis, commodi sunt nobis!",
  },
  {
    id: 1,
    name: "image 2",
    url: "./upload/h02.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero maiores odio impedit et nemo voluptate totam facilis, commodi sunt nobis!",
  },
  {
    id: 1,
    name: "image 3",
    url: "./upload/h03.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero maiores odio impedit et nemo voluptate totam facilis, commodi sunt nobis!",
  },
  {
    id: 1,
    name: "image 4",
    url: "./upload/h04.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero maiores odio impedit et nemo voluptate totam facilis, commodi sunt nobis!",
  },
  {
    id: 1,
    name: "image 5",
    url: "./upload/h05.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero maiores odio impedit et nemo voluptate totam facilis, commodi sunt nobis!",
  },
  {
    id: 1,
    name: "image 6",
    url: "./upload/h06.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero maiores odio impedit et nemo voluptate totam facilis, commodi sunt nobis!",
  },
];

export default function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://rbm7x5e9gl.execute-api.us-east-1.amazonaws.com/dev/items")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setPhotos(data.items);
      })
      .catch((e) => console.log(e));
  }, []);

  // console.log(photos);
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
          {/* // return <img src={image.url} className="photo"></img>; */}
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
