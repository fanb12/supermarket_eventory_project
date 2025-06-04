import axios from "../axiosConfig";

async function loginEmployee(formData) {
  const data = await axios.post("/apihouse/employeehouse/login", formData);

  return data;
}

export function logOut() {
  localStorage.removeItem("employee");
  // window.location.reload();
}

export default loginEmployee;
