import Axios from "axios";
const endpoint = process.env.REACT_APP_APIGATEWAY_ENDPOINT;

export async function publicItem() {
  try {
    const response = await Axios.get(`${endpoint}/items`);
    const result = response.json;
    return result.items;
  } catch (e) {
    console.error(e);
  }
}

export async function deleteItem(token, itemId) {
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

export async function getItem(token) {
  try {
    const response = await Axios.get(`${endpoint}/manageItems`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = response.json;
    return result.items;
  } catch (e) {
    console.error(e);
  }
}

export async function createItem(
  token,
  artist,
  itemname,
  description,
  type,
  file
) {
  try {
    const newItem = {
      artist: artist,
      itemname: itemname,
      description: description,
      type: type,
      public: false,
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

export async function updateItem(
  token,
  itemId,
  description,
  ifPublic,
  itemname
) {
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

async function getUploadUrl(token, itemId) {
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
