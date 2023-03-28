import Axios from "axios";
import { useAuth0 } from '@auth0/auth0-react';
const endpoint = process.env.REACT_APP_APIGATEWAY_ENDPOINT;


export  function ItemApi() {
  async function Token(){
    const { getAccessTokenSilently } = useAuth0();
    const token = await getAccessTokenSilently({
    authorizationParams: {
      audience: 'https://rbm7x5e9gl.execute-api.us-east-1.amazonaws.com/dev', // Value in Identifier field for the API being called.
      scope: 'read:posts', // Scope that exists for the API being called. You can create these through the Auth0 Management API or through the Auth0 Dashboard in the Permissions view of your API.
    }})
    return token
  }
  async function PublicItem() {
  try {
    const response = await Axios.get(`${endpoint}/items`);
    const result = response.data;
    return result.items;
  } catch (e) {
    console.error(e);
  }
}

async function deleteItem(itemId) {
  const token= await  Token()
  console.log('token',token)
  try {
    await Axios.delete(`${endpoint}/manageItems/${itemId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    console.error(e);
  }
}

 async function getItem() {
    const token= await  Token()
  console.log('token',token)
  try {
    const response = await Axios.get(`${endpoint}/manageItems`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = response.data;
    console.log('result',result)
    return result.items;
  } catch (e) {
    console.error(e);
  }
}

  async function createItem(
  artist,
  itemname,
  description,
  type,
  file
) {

    const token= await  Token()
    console.log('token',token)
  try {
    const newItem = {
      artist: artist,
      itemname: itemname,
      description: description,
      type: type,
      public: true,
    };
    console.log(JSON.stringify(newItem));
    console.log("creating Item");
    const response = await Axios.post(
      `${endpoint}/manageItems`,
      JSON.stringify(newItem),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const item = response.data.item;
    console.log(item);
    const itemId = item.itemId;
    const uploadUrl = await getUploadUrl(token, itemId);
    console.log(uploadUrl);
    uploadFile(uploadUrl, file);
  } catch (e) {
    console.error(e);
  }
}

 async function updateItem(
  itemId,
  description,
  ifPublic,
  itemname
) {
  const token= await  Token()
  console.log('token',token)
  try {
    const updateRequest = {
      description: description,
      public: ifPublic,
      itemname: itemname,
    };
    await Axios.patch(
      `${endpoint}/manageItems/${itemId}`,
      JSON.stringify(updateRequest),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (e) {
    console.error(e);
  }
}

async function getUploadUrl(token,itemId) {
  const response = await Axios.post(
    `${endpoint}/manageItems/${itemId}/attachment`,
    "",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.uploadUrl;
}

async function uploadFile(uploadUrl, file) {
  console.log(uploadUrl, file);
  const headers = {
    "Content-Type": "file.type",
  };
  await Axios.put(uploadUrl, file, { headers });
}
}