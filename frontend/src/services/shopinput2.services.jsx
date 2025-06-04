import axios from "../axiosConfig";

async function addShopInput(formData, loggedInEmployeeToken) {
  console.log(formData);

  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  const data = await axios.post("/api/shopinput2", formData, { headers });
  console.log(data);
  return data;
}

async function getAllShopInput(loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.get("/api/shopinputs2", { headers });
  console.log(data);
  9;
  return data;
}

async function updateShopInput(formData, loggedInEmployeeToken) {
  // console.log(loggedInEmployeeToken)
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.put("/api/shopinput2/update", formData, { headers });
  // console.log(data)

  return data;
}

async function singleShopInput(formData, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  // console.log(formData);
  const data = await axios.get(`/api/shopinput2/single/${formData}`, {
    headers,
  });

  // console.log(data);

  return data;
}
async function deleteShopInput(shop_input_id, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.delete(`/api/shopinput2/delete/${shop_input_id}`, {
    headers,
  });
  return data;
}

const SHOPINPUT = {
  deleteShopInput,
  addShopInput,
  getAllShopInput,
  updateShopInput,
  singleShopInput,
};

export default SHOPINPUT;
