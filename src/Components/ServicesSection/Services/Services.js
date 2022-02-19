import React from "react";
import ServicesBottom from "../ServicesBottom/ServicesBottom";
import ServicesTop from "../ServicesTop/ServicesTop";
import "./Services.css";
function Services() {
  return (
    <div className="Services" id="services">
      <ServicesTop />
      <ServicesBottom/>
    </div>
  );
}

export default Services;
