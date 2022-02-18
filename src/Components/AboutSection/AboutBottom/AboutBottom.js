import React, { useState } from "react";
import GrayBox from "../GrayBox/GrayBox";
import PhotoBox from "../PhotoBox/PhotoBox";
import "./AboutBottom.css";
function AboutBottom() {
  const [bottomContent, setBottomContent] = useState({
    img: "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/55290b56b9c6422c42122a2b_desk3.jpeg",
    h1: `Hip\n& Funky`,
    h5: "We try new things",
    p: "Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement. ",
    buttonName: "our services",
    link: "#services"
  });
  return (
    <div className="AboutBottom">
      <GrayBox title={bottomContent.h1} subTitle={bottomContent.h5} paragraph={bottomContent.p} button = {bottomContent.buttonName} href={bottomContent.link} />
      <PhotoBox imgurl={bottomContent.img} />
    </div>
  );
}

export default AboutBottom;
