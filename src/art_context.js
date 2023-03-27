import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./art_reducer";
import { getItem } from "./Api/ItemApi";
import { PublicItem } from "./Api/ItemApi";
import { useAuth0 } from "@auth0/auth0-react";
import ItemApi from "./Api/ItemApi";


const initialState = {
  photos: [],
  personalPhotos: [],
};


const ArtContext = React.createContext();

export const ArtProvider = ({ children }) => {
  const {  isAuthenticated } = useAuth0();

  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchPhotos = async () => {
    // const response = await PublicItem();
    // const photos = response;
    // dispatch({ type: "get_photos", payload: photos });
    
  if (isAuthenticated) {
    const response = await ItemApi.getItem();
          dispatch({ type: "get_personal_photos", payload: response });
    }
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
    if (isAuthenticated) {

      console.log("begin");

    dispatch({ type: "delete_photo", payload: itemId });
  }};

  useEffect(() => {
    fetchPhotos();
  }, [isAuthenticated]);

  return (
    <ArtContext.Provider value={{ ...state, deletePhoto }}>
      {children}
    </ArtContext.Provider>
  );
};

export const useArtContext = () => {
  return useContext(ArtContext);
};
