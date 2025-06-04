import axios from "../axiosConfig";

async function addStoreInput(formData, loggedInEmployeeToken) {
  console.log(formData);

  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  const data = await axios.post("/api/storeinput", formData, { headers });
  console.log(data);
  return data;
}

async function getAllStoreInput(loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.get("/api/storeinputs", { headers });
  console.log(data);

  return data;
}

async function updateStoreInput(formData, loggedInEmployeeToken) {
  // console.log(loggedInEmployeeToken)
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.put("/api/storeinput/update", formData, { headers });
  // console.log(data)

  return data;
}

async function singleStoreInput(formData, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  // console.log(formData);
  const data = await axios.get(`/api/storeinput/single/${formData}`, {
    headers,
  });

  // console.log(data);

  return data;
}
async function deleteStoreInput(store_input_id, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.delete(`/api/storeinput/delete/${store_input_id}`, {
    headers,
  });
  return data;
}
const storeINPUT = {
  deleteStoreInput,
  addStoreInput,
  getAllStoreInput,
  updateStoreInput,
  singleStoreInput,
};

export default storeINPUT;
