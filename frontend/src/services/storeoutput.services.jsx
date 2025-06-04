import axios from "../axiosConfig";

async function addStoreOutput(formData, loggedInEmployeeToken) {
  console.log(formData);

  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  const data = await axios.post("/api/storeoutput", formData, { headers });
  console.log(data);

  return data;
}

async function getAllStoreOutput(loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.get("/api/storeoutputs", { headers });
  console.log(data);

  return data;
}

async function updateStoreOutput(formData, loggedInEmployeeToken) {
  // console.log(loggedInEmployeeToken)
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.put("/api/storeoutput/update", formData, {
    headers,
  });
  // console.log(data)9

  return data;
}

async function singleStoreOutput(formData, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  // console.log(formData);
  const data = await axios.get(`/api/storeoutput/single/${formData}`, {
    headers,
  });

  // console.log(data);

  return data;
}
async function deleteStoreOutput(store_output_id, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.delete(
    `/api/storeoutput/delete/${store_output_id}`,
    {
      headers,
    }
  );
  return data;
}
const STOREOUTPUT = {
  deleteStoreOutput,
  addStoreOutput,
  getAllStoreOutput,
  updateStoreOutput,
  singleStoreOutput,
};

export default STOREOUTPUT;
