import React, { useContext, useEffect, useReducer } from "react";
import { publicItem } from "./Api/ItemApi";
import axios from "axios";
import reducer from "./art_reducer";
import { getItem } from "./Api/ItemApi";
import { deleteItem } from "./Api/ItemApi";
const endpoint = process.env.REACT_APP_APIGATEWAY_ENDPOINT;
const initialState = {
  user_token: process.env.REACT_APP_TOKEN,
  photos: [],
  personalPhotos: [],
};

const ArtContext = React.createContext();

export const ArtProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  

  const fetchPhotos = async (url) => {
    const response = await getItem();
          dispatch({ type: "get_personal_photos", payload: response });
    }
  
  //   const response = await axios.get(`${endpoint}/items`);
  //   const photos = response.data.items;
  //   dispatch({ type: "get_photos", payload: photos });
  //   if (state.user_token) {
  //     console.log("begin");
  //     const response = await axios.get(`${endpoint}/manageItems`, {
  //       headers: {
  //         Authorization: `Bearer ${state.user_token}`,
  //       },
  //     });
  //     console.log(response);
  //     const photos = response.data.items;
  //     console.log(photos);
  //     dispatch({ type: "get_personal_photos", payload: photos });
  //   }
  // };

  const deletePhoto = (itemId) => {

    dispatch({ type: "delete_photo", payload: itemId });
  };

  useEffect(() => {
    fetchPhotos(endpoint);
  }, []);

  return (
    <ArtContext.Provider value={{ ...state, deletePhoto }}>
      {children}
    </ArtContext.Provider>
  );
};

export const useArtContext = () => {
  return useContext(ArtContext);
};
