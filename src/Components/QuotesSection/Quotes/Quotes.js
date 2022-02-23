import React, { useEffect, useRef, useState } from "react";
import TitleSection from "../TitleSection/TitleSection";
import "./Quotes.css";
function Quotes() {
  const [curnum, setCurnum] = useState(0);
  const quote = [
    {
      em: "“ABC Agency our the best. Not only did they deliver my work on time, they even walked my dog when I was out of town”",
      par: "A Smith - Neighbour",
    },
    {
      em: "“I don't like people, but I make an exception for ABC Agency. They're pretty damn cool.”",
      par: "Brian Jones,  America Big Corporation",
    },
  ];

  const timeoutRef = useRef(null);
  const delay = 5500;
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurnum((prev) => (prev < quote.length - 1 ? prev + 1 : 0)),
      delay
    );
    return () => {
      resetTimeout();
    };
    
  }, [curnum, quote.length]);

  return (
    <div className="Quotes">
      <TitleSection />
      <p className="quoteText" data-active="active">
        <em>{quote[curnum].em}</em>
        <br />
        {quote[curnum].par}
      </p>
    </div>
  );
}

export default Quotes;
