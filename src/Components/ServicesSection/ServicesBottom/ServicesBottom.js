import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import "./ServicesBottom.css";

function ServicesBottom() {
  function onEntryService(entry) {
      let delay = 500
    entry.forEach((change) => {
      if (change.isIntersecting) {
        if (change.target.classList.contains("first")) {
          change.target.style.opacity = 1;
          change.target.style.transform = "translateY(0px)";
        }
        if (change.target.classList.contains("center")) {
          setTimeout(() => {
            change.target.style.opacity = 1;
            change.target.style.transform = "translateY(0px)";
          }, delay);
        }
        if (change.target.classList.contains("last")) {
          setTimeout(() => {
            change.target.style.opacity = 1;
            change.target.style.transform = "translateY(0px)";
          }, delay*2);
        }
      }
    });
  }
  useEffect(() => {
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntryService, options);
    let elements = document.querySelectorAll(".animatedCard");
    for (let elm of elements) {
      observer.observe(elm);
    }
  }, []);
  const [card1, setCard1] = useState({
    img: "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/55290faf53ab13dd4effe909_interface34.svg",
    title: "branding",
    paragraph:
      "Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha.",
  });
  const [card2, setCard2] = useState({
    img: "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/55290fdd3869f6db4ed16c7a_microwave.svg",
    title: "web design",
    paragraph:
      "Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha.",
  });
  const [card3, setcCard3] = useState({
    img: "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/55299a803b36ca374dffd8d3_picture.svg",
    title: "graphic design",
    paragraph:
      "Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha.",
  });
  return (
    <div className="ServicesBottom">
      <ServiceCard
        imgUrl={card1.img}
        title={card1.title}
        par={card1.paragraph}
        className={"first"}
      />
      <ServiceCard
        imgUrl={card2.img}
        title={card2.title}
        par={card2.paragraph}
        className={"center"}
      />
      <ServiceCard
        imgUrl={card3.img}
        title={card3.title}
        par={card3.paragraph}
        className={"last"}
      />
    </div>
  );
}

export default ServicesBottom;
