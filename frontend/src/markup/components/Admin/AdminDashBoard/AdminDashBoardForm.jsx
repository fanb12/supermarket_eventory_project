import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <section className="services-section">
      <div className="auto-container">
        <div className="sec-title style-two">
          <h2>Admin Dashboard</h2>
          <div className="text">
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway heading towards a
            streamlined cloud solution.{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>OPEN FOR ALL</h5>
              <h2>All Store Status </h2>
              <Link to={"/admin/statusstore"} className="read-more">
                LIST OF STORE STATUS +
              </Link>
              <div className="icon">
                <span className="flaticon-power"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>OPEN FOR ALL</h5>
              <h2>All Shop Status</h2>
              <Link to={"/admin/nowstatus"} className="read-more">
                SHOP STATUS +
              </Link>
              <div className="icon">
                <span className="flaticon-gearbox"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>OPEN FOR ADMINS</h5>
              <h2>Employees</h2>
              <Link to={"/admin/employees"} className="read-more">
                LIST OF EMPLOYEES +
              </Link>
              <div className="icon">
                <span className="flaticon-brake-disc"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>OPEN FOR ADMINS</h5>
              <h2>Add Employee</h2>
              <Link to={"/admin/add-employee"} className="read-more">
                read more +
              </Link>
              <div className="icon">
                <span className="flaticon-car-engine"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>LIST SHOP INPUT</h5>
              <h3>Add Shop Input Product</h3>
              <Link to={"/admin/shopinputpro"} className="read-more">
                read more +
              </Link>
              <div className="icon">
                <span className="flaticon-tire"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>List output shop</h5>
              <h2>Add Shop Output Pruduct</h2>
              <Link to={"/admin/shopoutputpro"} className="read-more">
                read more +
              </Link>
              <div className="icon">
                <span className="flaticon-spray-gun"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>list store input</h5>
              <h2>Add Store Input Product</h2>
              <Link to={"/admin/storeinputpro"} className="read-more">
                read more +
              </Link>
              <div className="icon">
                <span className="flaticon-car-engine"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>LIST STORE OUTPUT</h5>
              <h3>Add Store Output Product</h3>
              <Link to={"/admin/orders"} className="read-more">
                read more +
              </Link>
              <div className="icon">
                <span className="flaticon-tire"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>CUSTOMER</h5>
              <h2>Tyre & Wheels</h2>
              <Link to={"/admin/customers"} className="read-more">
                read more +
              </Link>
              <div className="icon">
                <span className="flaticon-spray-gun"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
