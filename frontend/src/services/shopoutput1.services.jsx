import axios from "../axiosConfig";

async function addShopOutput(formData, loggedInEmployeeToken) {
  console.log(formData);

  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  const data = await axios.post("/api/shopoutput1", formData, { headers });
  console.log(data);
  9;
  return data;
}

async function getAllShopOutput(loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.get("/api/shopoutputs1", { headers });
  console.log(data);

  return data;
}

async function updateShopOutput(formData, loggedInEmployeeToken) {
  // console.log(loggedInEmployeeToken)
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.put("/api/shopoutput1/update", formData, {
    headers,
  });
  // console.log(data)

  return data;
}

async function singleShopOutput(formData, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  // console.log(formData);
  const data = await axios.get(`/api/shopoutput1/single/${formData}`, {
    headers,
  });

  // console.log(data);

  return data;
}
async function deleteShopOutput(shop_output_id, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.delete(`/api/shopoutput1/delete/${shop_output_id}`, {
    headers,
  });
  return data;
}
const SHOPOUTPUT = {
  deleteShopOutput,
  addShopOutput,
  getAllShopOutput,
  updateShopOutput,
  singleShopOutput,
};

export default SHOPOUTPUT;
