import axios from "../axiosConfig";

async function addShopInput(formData, loggedInEmployeeToken) {
  console.log(loggedInEmployeeToken);

  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  const data = await axios.post("/apihouse/shopinputhouse", formData, {
    headers,
  });
  console.log(data);
  return data;
}

async function getAllShopInput(loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.get("/apihouse/shopinputhouses", { headers });
  console.log(data);

  return data;
}

async function updateShopInput(formData, loggedInEmployeeToken) {
  // console.log(loggedInEmployeeToken)
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.put("/apihouse/shopinputhouse/update", formData, {
    headers,
  });
  // console.log(data)

  return data;
}
async function deleteShopInput(shop_input_id, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.delete(
    `/apihouse/shopinputhouse/delete/${shop_input_id}`,
    {
      headers,
    }
  );
  return data;
}

async function singleShopInput(formData, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  // console.log(formData);
  const data = await axios.get(`/apihouse/shopinputhouse/single/${formData}`, {
    headers,
  });

  // console.log(data);

  return data;
}
async function searchInput(formData, loggedInEmployeeToken) {
  // console.log(loggedInEmployeeToken)
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.get(
    `/api/shopinput/find?${formData}`,

    {
      headers,
    }
  );
  //console.log(data);

  return data;
}
async function findCustomer(formData, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  // console.log(formData);

  const { data } = await axios.get(`/api/customer/find?query=${formData}`, {
    headers,
  });

  // console.log(data);
  return data;
}

const SHOPINPUT = {
  addShopInput,
  findCustomer,
  getAllShopInput,
  updateShopInput,
  singleShopInput,
  deleteShopInput,
};

export default SHOPINPUT;
