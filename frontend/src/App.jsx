// import React from "react";

// // Import the Routes and Route components from react-router
// import { Routes, Route } from "react-router";

// // Import the page components
// import Home from "./markup/pages/StaticsPages/Home";
// import About from "./markup/pages/StaticsPages/About";
// import Service from "./markup/pages/StaticsPages/Services";
// import Contact from "./markup/pages/StaticsPages/Contact";
// import Login from "./markup/pages/StaticsPages/Login";
// import Unauthorized from "./markup/pages/StaticsPages/Unauthorized";
// import AddEmployee from "./markup/pages/admin/Employees/AddEmployee";
// import Employees from "./markup/pages/admin/Employees/Employees";
// import EditEmployee from "./markup/pages/admin/Employees/EditEmployee";
// import AddCustomer from "./markup/pages/admin/Customers/AddCustomer";
// import Customers from "./markup/pages/admin/Customers/Customers";
// import EditCustomer from "./markup/pages/admin/Customers/EditCustomer";
// import Admin from "./markup/pages/admin/Admin/Admin";
// import NewOrder from "./markup/pages/admin/Orders/NewOrder";
// import CustomerProfile from "./markup/pages/admin/Orders/CustomerProfile";
// import Services from "./markup/pages/admin/Service/Services";
// import EditService from "./markup/pages/admin/Service/EditService";
// import Orders from "./markup/pages/admin/Orders/Orders";
// import EditOrder from "./markup/pages/admin/Orders/EditOrders";
// import OrderDetails from "./markup/pages/admin/Orders/OrderDetails";
// import AddNewOrders from "./markup/pages/admin/Orders/AddNewOrders";
// import CreateNewOrders from "./markup/pages/admin/Orders/CreateNewOrders";
// import AdminDashboard from "./markup/pages/admin/Admin/AdminDashBoard";

// // Import the header and footer components
// import Header from "./markup/components/StatePages/Header/Header";
// import Footer from "./markup/components/StatePages/Footer/Footer";

// // import the css files
// import "./assets/template_assets/css/bootstrap.css";
// import "./assets/template_assets/css/style.css";
// import "./assets/template_assets/css/responsive.css";
// import "./assets/template_assets/css/color.css";

// // import the custom files
// import "./assets/styles/custom.css";

// // import the PrivateAuthToute component
// import PrivateAuthRoute from "./markup/components/Auth/PrivateAuthRoute";

// function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//         {/* home page route */}
//         <Route path="/" element={<Home />} />

//         <Route path="/about" element={<About />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/contact" element={<Contact />} />

//         {/* login page route */}
//         <Route path="/login" element={<Login />} />

//         {/* unauthorized page route */}
//         <Route path="/unauthorized" element={<Unauthorized />} />

//         {/* Dashboard page route */}
//         <Route
//           path="/admin"
//           element={
//             <PrivateAuthRoute roles={[1, 2, 3]}>
//               <AdminDashboard />{" "}
//             </PrivateAuthRoute>
//           }
//         />

//         {/* Customers page route */}
//         <Route
//           path="/admin/customers"
//           element={
//             <PrivateAuthRoute roles={[2, 3]}>
//               <Customers />
//             </PrivateAuthRoute>
//           }
//         />

//         {/* add customer page route */}
//         <Route path="/admin/add-customer" element={<AddCustomer />} />

//         {/* Edit Customer Page Route */}
//         <Route
//           path="/admin/customer-update/:customer_hash"
//           element={<EditCustomer />}
//         />

//         {/* Customer Profile Page Route */}
//         <Route
//           path="/admin/customer-profile/:customer_hash"
//           element={<CustomerProfile />}
//         />

//         {/* New Order Page Route */}
//         <Route path="/admin/services" element={<Services />} />

//         {/* Customer Profile Page Route */}
//         <Route
//           path="/admin/services/service-update/:service_id"
//           element={<EditService />}
//         />

//         {/* New Order Page Route */}
//         <Route path="/admin/order" element={<NewOrder />} />

//         <Route
//           path="/admin/orders"
//           element={
//             <PrivateAuthRoute roles={[1, 2, 3]}>
//               <Orders />
//             </PrivateAuthRoute>
//           }
//         />

//         <Route
//           path="admin/orders/order-update/:order_hash"
//           element={
//             <PrivateAuthRoute roles={[1, 2, 3]}>
//               <EditOrder />
//             </PrivateAuthRoute>
//           }
//         />

//         <Route
//           path="/orders/order-detail/:order_hash"
//           element={<OrderDetails />}
//         />

//         <Route
//           path="admin/order/add-new-order/:customer_hash"
//           element={
//             <PrivateAuthRoute roles={[1, 2, 3]}>
//               <AddNewOrders />
//             </PrivateAuthRoute>
//           }
//         />

//         <Route
//           path="admin/order/add-new-order/select-service/:customer_hash/:vehicle_id"
//           element={
//             <PrivateAuthRoute roles={[1, 2, 3]}>
//               <CreateNewOrders />
//             </PrivateAuthRoute>
//           }
//         />

//         {/* Employees page route */}
//         <Route path="/admin/employees" element={<Employees />} />
//         {/* admin page route */}
//         <Route path="/admin" element={<Admin />} />
//         {/* Edit Employees page route */}
//         <Route
//           path="/admin/employee-update/:employee_id"
//           element={<EditEmployee />}
//         />
//         {/* add employee page route */}
//         <Route path="/admin/add-employee" element={<AddEmployee />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }
// export default App;

import React from "react";


// Import the Routes and Route components from react-router
import { Routes, Route } from "react-router";

// Import the page components
import Home from "./markup/pages/StaticsPages/Home";
import About from "./markup/pages/StaticsPages/About";
import Service from "./markup/pages/StaticsPages/Services";
import Contact from "./markup/pages/StaticsPages/Contact";
import Login from "./markup/pages/StaticsPages/Login";
import Unauthorized from "./markup/pages/StaticsPages/Unauthorized";
import AddEmployee from "./markup/pages/admin/Employees/AddEmployee";
import Employees from "./markup/pages/admin/Employees/Employees";
import EditEmployee from "./markup/pages/admin/Employees/EditEmployee";

import Admin from "./markup/components/Admin/AdminMenu/AdminMenu";

import AdminDashboard from "./markup/pages/admin/Admin/AdminDashBoard";

// Import the header and footer components
import Header from "./markup/components/StatePages/Header/Header";
import Footer from "./markup/components/StatePages/Footer/Footer";

// import the css files
import "./assets/template_assets/css/bootstrap.css";
import "./assets/template_assets/css/style.css";
import "./assets/template_assets/css/responsive.css";
import "./assets/template_assets/css/color.css";

// import the custom files
import "./assets/styles/custom.css";

// import the PrivateAuthToute component
import PrivateAuthRoute from "./markup/components/Auth/PrivateAuthRoute";
import ShopinputList from "./markup/pages/admin/shopinput/ShopinputList";

import ShopoutputList from "./markup/pages/admin/shopoutput/ShopoutputList";
import AddShopoutput from "./markup/pages/admin/shopoutput/AddshopOutput";
import AddShopInput from "./markup/pages/admin/shopinput/AddShopInput";

import ShopinputEdit from "./markup/pages/admin/shopinput/ShopinputEdit";

import ShopoutputEdit from "./markup/pages/admin/shopoutput/ShopoutputEdit";

import CustomerStatusList from "./markup/pages/admin/customerstatus/CustomerStatusList";

import CustomerStatusEdit from "./markup/pages/admin/customerstatus/CustomerStatusEdit";

import Nowstatus from "./markup/pages/admin/nowstatus/NowStatus";

import AllShopStatus from "./markup/pages/admin/AllStatusShop/AllStatusShop";
import ShowAllProduct from "./markup/pages/admin/AllProducts/ShowAllProducts";
import EditProducts from "./markup/pages/admin/AllProducts/EditProducts";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* home page route */}
        <Route path="/" element={<Home />} />
        <Route path="/houseabout" element={<About />} />
        <Route path="/houseservice" element={<Service />} />
        <Route path="/housecontact" element={<Contact />} />
        {/* login page route */}
        <Route path="/houselogin" element={<Login />} />
        {/* unauthorized page route */}
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/* Dashboard page route */}
        <Route
          path="/houseadmin"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <AdminDashboard />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/houseadmin/houseproduct-update/:id"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <EditProducts />
            </PrivateAuthRoute>
          }
        />
        {/* Customers page route */}

        <Route
          path="/houseadmin/houseAploadImage"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <ShowAllProduct />
              </PrivateAuthRoute>
          }
        />
        {/* Shopinput lists page route */}
        <Route
          path="/houseadmin/houseshopinputpro"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <ShopinputList />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/houseadmin/houseaddshopinput"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <AddShopInput />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/houseadmin/housecustomerstatuspro"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <CustomerStatusList />
            </PrivateAuthRoute>
          }
        />

        <Route
          path="/houseadmin/housecustomerstatuss/customer-update/:status_id"
          element={
            <PrivateAuthRoute roles={[3]}>
              <CustomerStatusEdit />
            </PrivateAuthRoute>
          }
        />

        <Route
          path="/houseadmin/ShopOutput"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <ShopoutputList />
            </PrivateAuthRoute>
          }
        />

        <Route
          path="/houseadmin/houseAddshopoutput"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <AddShopoutput />
            </PrivateAuthRoute>
          }
        />

        <Route
          path="/houseadmin/houseallshopstatus"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AllShopStatus />
            </PrivateAuthRoute>
          }
        />

        <Route
          path="/houseadmin/housenowstatus"
          element={
            <PrivateAuthRoute roles={[3]}>
              <Nowstatus />
            </PrivateAuthRoute>
          }
        />

        <Route
          path="/houseadmin/houseshopoutputs/shopoutput-update/:shop_output_id"
          element={
            <PrivateAuthRoute roles={[3]}>
              <ShopoutputEdit />
            </PrivateAuthRoute>
          }
        />

        <Route
          path="/houseadmin/houseshopinputs/shopinput-update/:shop_input_id"
          element={
            <PrivateAuthRoute roles={[3]}>
              {" "}
              <ShopinputEdit />{" "}
            </PrivateAuthRoute>
          }
        />

        {/* Employees page route */}
        <Route
          path="/houseadmin/houseemployees"
          element={
            <PrivateAuthRoute roles={[3]}>
              {" "}
              <Employees />
            </PrivateAuthRoute>
          }
        />
        {/* admin page route */}
        <Route path="/houseadmin" element={<Admin />} />
        {/* Edit Employees page route */}
        <Route
          path="/houseadmin/houseemployee-update/:employee_id"
          element={
            <PrivateAuthRoute roles={[3]}>
              <EditEmployee />{" "}
            </PrivateAuthRoute>
          }
        />
        {/* add employee page route */}
        <Route
          path="/houseadmin/houseadd-employee"
          element={
            <PrivateAuthRoute roles={[3]}>
              {" "}
              <AddEmployee />{" "}
            </PrivateAuthRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
