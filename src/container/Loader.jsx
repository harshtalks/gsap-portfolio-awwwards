import gsap from "gsap";
import { useState, useRef, useEffect } from "react";
import { ReactComponent as Mummy } from "../images/icons8-mummy.svg";
const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      gsap.to(".loader", {
        duration: 1,
        yPercent: -100,
        ease: "expo.in"
      });
    }, 1000);

    if (isLoading) {
    }
  }, [isLoading]);
  return (
    <div className="loader">
      <Mummy />
    </div>
  );
};

export default Loader;
