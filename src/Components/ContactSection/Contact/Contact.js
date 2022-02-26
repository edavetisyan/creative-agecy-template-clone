import React, { useEffect } from "react";
import onEntry from "../../onEntry";
import "./Contact.css";
function Contact() {
 
  useEffect(() => {
    let options = { threshold: [0.1] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll(".animated");
    console.log(elements);
    for (let elm of elements) {
      observer.observe(elm);
    }
  }, []);
  return (
    <section className="Contact" id="contact">
      <h2
        style={{
          transform: `translateX(0px) translateY(80px)`,
          transition: `opacity 750ms ease 0s, transform 500ms ease 0s`,
          opacity: 0,
        }}
        className="animated"
      >
        Write us a letter
      </h2>
      <h5
        style={{
          opacity: 0,
          transform: `translateX(-50px) translateY(0px)`,
          transition: "opacity 750ms ease 0s, transform 750ms ease 0s",
        }}
        className="animated"
      >
        We appreciate you ideas
      </h5>
     <div className="contact-form">
     <form action="mailto:someone@example.com">
        <label className="label" for="name">
          Name
        </label>
    <input className=" text-field" id="name" type="text" placeholder="Enter your name" name="name" data-name="Name"/>
        <label className="label" for="email">
          Email Address
        </label>
        <input className="text-field" id="email" type="email" placeholder="Enter your email address" name="email" data-name="Email" required="required"></input>
        <label className="label" for="field">
          YOUR&nbsp;MESSAGE
        </label>
        <textarea id="field" placeholder="Example Text" name="field"></textarea>
        <input className="submit-btn" type="submit" value="Submit"></input>
      </form>
     </div>
    </section>
  );
}

export default Contact;
