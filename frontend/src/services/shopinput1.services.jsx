import axios from "../axiosConfig";

async function addShopInput(formData, loggedInEmployeeToken) {
  console.log(formData);

  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  const data = await axios.post("/api/shopinput1", formData, { headers });
  console.log(data);
  return data;
}

async function getAllShopInput(loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.get("/api/shopinputs1", { headers });
  console.log(data);
  9;
  return data;
}

async function updateShopInput(formData, loggedInEmployeeToken) {
  // console.log(loggedInEmployeeToken)
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.put("/api/shopinput1/update", formData, { headers });
  // console.log(data)

  return data;
}

async function singleShopInput(formData, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  // console.log(formData);
  const data = await axios.get(`/api/shopinput1/single/${formData}`, {
    headers,
  });

  // console.log(data);

  return data;
}
async function deleteShopInput(shop_input_id, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.delete(`/api/shopinput1/delete/${shop_input_id}`, {
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
