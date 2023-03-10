import axios from "axios";
import { act } from "react-dom/test-utils";
import { deleteItem } from "./Api/ItemApi";
const endpoint = process.env.REACT_APP_APIGATEWAY_ENDPOINT;

export default function art_reducer(state, action) {
  if (action.type === "get_photos") {
    return { ...state, photos: [...action.payload] };
  }

  if (action.type === "get_personal_photos") {
    return { ...state, personalPhotos: [...action.payload] };
  }

  if (action.type === "delete_photo") {
    const { photos, personalPhotos } = state;
    const newPhotos = photos.filter((item) => item.itemId !== action.payload);
    const newPersonalPhotos = personalPhotos.filter(
      (item) => item.itemId !== action.payload
    );
    (async () => {
      await deleteItem(action.payload)
        .then((response) => console.log("delete successful"))
        .catch((err) => console.log("There was an error", err));
    })();

    return {
      ...state,
      photos: [...newPhotos],
      personalPhotos: [...newPersonalPhotos],
    };
  }

  return state;
}
