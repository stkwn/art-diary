import React, { useState, useEffect } from "react";
import { FaBox } from "react-icons/fa";
import PhotoWall from "./PhotoWall";


export default function Photos() {
  const [photos, setPhotos] = useState(PhotoWall);

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
