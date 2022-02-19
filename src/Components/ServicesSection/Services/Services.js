import React from "react";
import ServicesBottom from "../ServicesBottom/ServicesBottom";
import ServicesTop from "../ServicesTop/ServicesTop";
import "./Services.css";
function Services() {
  return (
    <div className="Services">
      <ServicesTop />
      <ServicesBottom/>
    </div>
  );
}

export default Services;
