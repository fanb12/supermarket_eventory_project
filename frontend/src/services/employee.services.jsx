import axios from "../axiosConfig";

// A function to send post request to create a new employee
async function createEmployee(formData, loggedInEmployeeToken) {
  // define your headers
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  const data = await axios.post("/houseapi/houseemployee", formData, {
    headers,
  });

  return data;
}

// A function to send get request to get all employees
async function getAllEmployees(token) {
  const headers = {
    "x-access-token": token,
  };

  const data = await axios.get("/houseapi/houseemployees", { headers });

  return data;
}

// A function to employee update request
async function updateEmployee(formData, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  const data = await axios.put("/houseapi/houseemployee/update", formData, {
    headers,
  });

  // console.log(data);

  return data;
}

// a function to get single employee
async function singleEmployee(formData, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  // console.log(formData);
  const data = await axios.get(`/houseapi/houseemployee/single/${formData}`, {
    headers,
  });

  // console.log(data);

  return data;
}

const employeeService = {
  createEmployee,
  getAllEmployees,
  updateEmployee,
  singleEmployee,
};

export default employeeService;
