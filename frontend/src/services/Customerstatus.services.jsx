import axios from "../axiosConfig";

async function addCustomerStatus(formData, loggedInEmployeeToken) {
  console.log(formData);

  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  const data = await axios.post("/api/customerstatus", formData, { headers });
  console.log(data);

  return data;
}

async function getAllCustomerStatus(loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.get("/api/customerstatuss", { headers });
  console.log(data);

  return data;
}

async function updateCustomerStatus(formData, loggedInEmployeeToken) {
  // console.log(loggedInEmployeeToken)
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await axios.put("/api/customerstatus/update", formData, {
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
  const data = await axios.get(`/api/customerstatus/single/${formData}`, {
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
