import { Helmet } from "react-helmet";
import image from "../images/image.jpeg";

const HelmetComponent = () => {
  const url = "https://harshtalks.netlify.app";
  const description =
    "Hey, welcome to my portfolio, LOL I just realized how would you know my name.. Hey Welcome to Harsh Pareek portfolio. Hire me for creative frontend projects. Have a good day!!";
  return (
    <Helmet>
      <html lang="en" />
      <title>Harsh Pareek</title>
      <meta name="description" content={description} />
      <link
        rel="apple-touch-icon"
        href="https://img.icons8.com/bubbles/50/000000/homer-simpson.png"
      />
      <link
        rel="icon"
        href="https://img.icons8.com/bubbles/50/000000/homer-simpson.png"
      />

      {/* Facebook */}
      <meta name="og:url" content={url} />
      <meta name="og:title" content="Harsh Pareek" />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:title" content={"Harsh Pareek"} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image ? image : ""} />
      <meta name="twitter:card" content="summary" />

      {/* importing fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap"
        rel="stylesheet"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Rampart+One&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default HelmetComponent;
