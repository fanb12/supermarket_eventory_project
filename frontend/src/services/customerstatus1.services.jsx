import axios from "../axiosConfig";

async function addCustomerStatus(formData, loggedInEmployeeToken) {
  console.log(formData);

  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  const data = await axios.post("/api/customerstatus1", formData, { headers });
  console.log(data);

  return data;
}

async function getAllCustomerStatus(loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.get("/api/customerstatuss1", { headers });
  console.log(data);

  return data;
}

async function updateCustomerStatus(formData, loggedInEmployeeToken) {
  // console.log(loggedInEmployeeToken)
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.put("/api/customerstatus1/update", formData, {
    headers,
  });
  // console.log(data)9

  return data;
}

async function singleCustomerStatus(formData, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  // console.log(formData);
  const data = await axios.get(`/api/customerstatus1/single/${formData}`, {
    headers,
  });

  // console.log(data);

  return data;
}

const CUSTOMERSTATUS = {
  addCustomerStatus,
  getAllCustomerStatus,
  updateCustomerStatus,
  singleCustomerStatus,
};

export default CUSTOMERSTATUS;
