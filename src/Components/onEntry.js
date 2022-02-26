function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      if (
        change.target.localName === "h5" 
        // &&
        // change.target.parentNode.className === "grayBox"
      ) {
        setTimeout(() => {
          change.target.style.opacity = 1;
          change.target.style.transform = "translateX(0px) translateY(0px)";
        }, 750);
      } else {
        change.target.style.opacity = 1;
        change.target.style.transform = "translateX(0px) translateY(0px)";
      }
    }
  });
}

export default onEntry;
