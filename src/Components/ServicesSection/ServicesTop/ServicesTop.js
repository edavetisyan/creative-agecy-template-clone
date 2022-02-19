import React, { useState } from 'react'
import GrayBox from '../../AboutSection/GrayBox/GrayBox';
import PhotoBox from '../../AboutSection/PhotoBox/PhotoBox';
import './ServicesTop.css'

function ServicesTop() {
    const [serviceContent, setServiceContent] = useState({
        img: "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/55290b76b9c6422c42122a30_desk2.jpeg",
        h1: `Things\nwe do`,
        h5: "We exist to create",
        p: "Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement.",
        buttonName: "get in touch",
        link: "#contact"
      });
  return (
    <div className='ServicesTop'>
      <PhotoBox imgurl={serviceContent.img} />
     <GrayBox title={serviceContent.h1} subTitle={serviceContent.h5} paragraph={serviceContent.p} button = {serviceContent.buttonName} href={serviceContent.link} />
    </div>
  )
}

export default ServicesTop