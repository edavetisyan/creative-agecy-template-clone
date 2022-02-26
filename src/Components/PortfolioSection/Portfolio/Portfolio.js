import React, { useState } from "react";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import GrayBox from "../../AboutSection/GrayBox/GrayBox";
import "./Portfolio.css";
function Portfolio() {
  const imgs = [
    "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552aa53c0108cf394df63840_port1-small.jpg",
    "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552aa5cc0108cf394df63845_port2-small.jpg",
    "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552aacfa416f90126f4e8596_port3-small.jpg",
    "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552b90eaede1286e5f007d06_port4-small.jpg",
    "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552b9102ede1286e5f007d0b_port5-small.jpg",
    "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552b9118ede1286e5f007d0f_port6-small.jpg",
    "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552b912a18c4f26f5f653ab3_port7-small.jpg",
  ];
  let boxTitle = {
    h2: "Latest\ncreations",
    sub: "We make beautiful things",
    paragraph:
      "Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking.",
  };
  return (
    <section id="portfolio" className="Portfolio">
      <GrayBox title={boxTitle.h2} subTitle = {boxTitle.sub} paragraph={boxTitle.paragraph} />
      <PortfolioItem img={imgs[0]} />
      <PortfolioItem img={imgs[1]} />
      <PortfolioItem img={imgs[2]} />
      <PortfolioItem img={imgs[3]} />
      <PortfolioItem img={imgs[4]} />
      <PortfolioItem img={imgs[5]} />
      <PortfolioItem img={imgs[6]} />
    </section>
  );
}

export default Portfolio;
