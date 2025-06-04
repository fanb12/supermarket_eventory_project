import axios from "../axiosConfig";

async function addProduction(formData, loggedInEmployeeToken) {
  console.log(formData);

  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  const data = await axios.post("/api/production", formData, { headers });
  console.log(data);
  return data;
}

async function getAllProduction(loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.get("/api/productions", { headers });
  console.log(data);
  9;
  return data;
}

async function updateProduction(formData, loggedInEmployeeToken) {
  // console.log(loggedInEmployeeToken)
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.put("/api/Production/update", formData, { headers });
  // console.log(data)

  return data;
}

async function singleProduction(formData, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  // console.log(formData);
  const data = await axios.get(`/api/production/single/${formData}`, {
    headers,
  });

  // console.log(data);

  return data;
}
async function deleteProduction(production_id, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.delete(`/api/production/delete/${production_id}`, {
    headers,
  });
  return data;
}

const SHOPINPUT = {
  addProduction,
  getAllProduction,
  updateProduction,
  singleProduction,
  deleteProduction,
};

export default SHOPINPUT;
