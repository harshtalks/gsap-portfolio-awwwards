import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MainHeader = () => {
  const tl = new gsap.timeline();
  useEffect(() => {
    tl.to(".scroll", {
      duration: 2,
      xPercent: -97
    }).to(".container", {
      opacity: 0
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".container",
      start: "top top",
      end: "+=10000",
      scrub: true,
      pin: true,
      anticipatePin: 1
    });
  }, []);

  return (
    <div className="container">
      <div className="scroll">
        <div className="first">
          <h1>HARSH</h1>
          <img
            src="https://img.icons8.com/material/90/000000/chevron-down--v1.png"
            alt="xyz"
          />
        </div>
        <div className="second">
          <h1>lskl</h1>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
