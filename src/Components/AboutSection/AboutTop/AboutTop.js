import React, { useState } from "react";
import GrayBox from "../GrayBox/GrayBox";
import PhotoBox from "../PhotoBox/PhotoBox";
import './AboutTop.css'
function AboutTop() {
  // const [img, setimg] = useState('')
  const [topContent, setTopContent] = useState({
    img: "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/55290b3f3869f6db4ed16c57_desk1.jpeg",
    h1: "Creative\n& fresh",
    h5: "Our digital agency",
    p: "Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement. ",
    buttonName: "view portfolio",
    link: "#portfolio"
  });
  return (
    <div className="AboutTop">
      <PhotoBox imgurl={topContent.img} />
      <GrayBox title={topContent.h1} subTitle={topContent.h5} paragraph={topContent.p} button = {topContent.buttonName} href={topContent.link}/>
    </div>
  );
}

export default AboutTop;
