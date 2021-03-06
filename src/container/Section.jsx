import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Moodlist from "../images/Olivia.png";
import Covid from "../images/covid.png";
import Boston from "../images/boston.png";
import Country from "../images/country.png";
import bank from "../images/bank.png";
import Writeup from "./WriteUp";
gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  const arrayOfImages = [
    { name: "Moodlist Spotify", link: "http://moodlist.netlify.app/" },
    { name: "Covid-19 App", link: "http://harshpareek.me/covid-19.github.io/" },
    { name: "Boston Housing ML", link: "https://boston-housing.netlify.app/" },
    {
      name: "Country Info App",
      link: "https://where-in-the-world-rest.netlify.app/"
    },
    {
      name: "Bank App (Vanilla)",
      link: "http://harshpareek.me/bankapp.github.io/"
    },
    {
      name: "PacMan App",
      link: "https://github.com/harshtalks/pacman-webcam"
    },
    {
      name: "Boss Asked Me To",
      link: "https://codesandbox.io/s/github/harshtalks/boss-asked-me-to"
    }
  ];
  const tl2 = new gsap.timeline();
  const tl3 = new gsap.timeline();
  useEffect(() => {
    tl2.to(".scrollingText", {
      xPercent: -100,
      duration: 3
    });

    tl3
      .to(".emailContent", {
        opacity: 1
      })
      .to(".project-0", {
        opacity: 0.6,
        y: -50
      })
      .to(".project-1", {
        opacity: 0.6,
        y: -50
      })
      .to(".project-2", {
        opacity: 0.6,
        y: -50
      })
      .to(".project-3", {
        opacity: 0.6,
        y: -50
      })
      .to(".project-4", {
        opacity: 0.6,
        y: -50
      })
      .to(".project-5", {
        opacity: 0.6,
        y: -50
      })
      .to(".project-6", {
        opacity: 0.6,
        y: -50
      });

    // gsap.utils.toArray(".images").forEach((img, i) => {
    //   gsap.to(img, {
    //     scrollTrigger: {
    //       trigger: img,
    //       start: "bottom top",
    //       scrub: true
    //     },
    //     duration: 5,
    //     ease: "expo.out",
    //     opacity: 1,
    //     x: -10
    //   });
    // });

    ScrollTrigger.create({
      animation: tl2,
      trigger: ".scrollingText",
      scrub: 1,
      start: "bottom bottom",
      end: "top top",
      ease: "expo.out"
    });

    ScrollTrigger.create({
      animation: tl3,
      trigger: ".email",
      pin: true,
      scrub: 1,
      start: "bottom bottom",
      end: "+=" + window.innerHeight * 4
    });
  }, []);
  return (
    <div className="section-container">
      <div className="content">
        <h1 className="skills">
          I know HTML, CSS, Sass, Vanilla JS, React JS, Styled-Components, NPM,
          Webpack, Parcel, Gastby JS, Gsap Animations, Python, Data Structures
          and Algorithms, Deep Learning (with JS and Python), Machine Learning
          with Python and JS. Wordpress, WooCommerce.
        </h1>

        <div className="scrollingText">
          @HARSHTALKS @HARSHTALKS @HARSHTALKS @HARSHTALKS @HARSHTALKS
          @HARSHTALKS @HARSHTALKS @HARSHTALKS @HARSHTALKS @HARSHTALKS
          @HARSHTALKS @HARSHTALKS @HARSHTALKS @HARSHTALKS @HARSHTALKS
        </div>
        <h1 className="skills">
          I'm also taking freelancing projects mainly for the business/brand
          website and complete ecommerce solution build upon technologies like
          wordpress and wooCommerce. you can write me at{" "}
          <a href="https://www.instagram.com/harshtalks">@harshtalks</a>
        </h1>
      </div>
      <Writeup />
      <div className="email">
        <div className="emailContent">
          <h1>
            <a href="mailto:harshpareek91@gmail.com">harshpareek91@gmail.com</a>
          </h1>
          <div className="projects">
            {arrayOfImages.map((el, i) => (
              <p
                className={`project-${i}`}
                key={i}
                onClick={() => window.open(el.link, "_blank")}
              >
                {el.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
