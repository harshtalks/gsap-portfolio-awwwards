import "./styles/styles.scss";
import Loader from "./container/Loader";
import MainHeader from "./container/MainSection";
import Section from "./container/Section";
import HelmetComponent from "./container/HelmetComponent";
export default function App() {
  return (
    <>
      <HelmetComponent />
      <div className="main">
        <Loader />
        <MainHeader />
        <Section />
      </div>
    </>
  );
}
