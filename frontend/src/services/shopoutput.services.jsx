import axios from "../axiosConfig";

async function addShopOutput(formData, loggedInEmployeeToken) {
  console.log(formData);

  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  const data = await axios.post("/apihouse/shopoutputhouse", formData, {
    headers,
  });
  console.log(data);
  9;
  return data;
}

async function getAllShopOutput(loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.get("/apihouse/shopoutputhouses", { headers });
  console.log(data);

  return data;
}

async function updateShopOutput(formData, loggedInEmployeeToken) {
  // console.log(loggedInEmployeeToken)
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.put("/apihouse/shopoutputhouse/update", formData, {
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
  const data = await axios.get(`/apihouse/shopoutputhouse/single/${formData}`, {
    headers,
  });

  // console.log(data);

  return data;
}
async function deleteShopOutput(shop_output_id, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.delete(
    `/apihouse/shopoutputhouse/delete/${shop_output_id}`,
    {
      headers,
    }
  );
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
