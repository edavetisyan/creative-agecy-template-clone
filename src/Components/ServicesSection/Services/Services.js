import React from "react";
import ServicesBottom from "../ServicesBottom/ServicesBottom";
import ServicesTop from "../ServicesTop/ServicesTop";
import "./Services.css";
function Services() {
  return (
    <section className="Services" id="services">
      <ServicesTop />
      <ServicesBottom/>
    </section>
  );
}

export default Services;
