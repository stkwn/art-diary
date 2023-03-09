import React, { useState, useEffect } from "react";
import { FaBox } from "react-icons/fa";
import PhotoWall from "./PhotoWall";

const pics = [
  {
    itemId: 1,
    itemName: "image 1",
    attachementUrl: "./upload/h01.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero maiores odio impedit et nemo voluptate totam facilis, commodi sunt nobis!",
  },
  {
    itemId: 2,
    itemName: "image 2",
    attachementUrl: "./upload/h02.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero maiores odio impedit et nemo voluptate totam facilis, commodi sunt nobis!",
  },
];

export default function Photos() {
  const [photos, setPhotos] = useState(pics);

  // useEffect(() => {
  //   fetch("https://rbm7x5e9gl.execute-api.us-east-1.amazonaws.com/dev/items")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       return setPhotos(data.items);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  // console.log(photos);

  return <PhotoWall photos={photos} />;
}
