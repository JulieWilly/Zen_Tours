import "./destinations.css";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Places from "./Places";
import TitleTag from "../../components/TitleTag";

const Destinations = () => {
  return (
    <>
      <Banner />
      <div className="destinations_Sect">
        <TitleTag
          title={"Higly rated destinations"}
          description={
            "See more destinations and places we conduct travels to and the favourable pricing enlisted."
          }
        />

        <Places />
      </div>
      <Footer />
    </>
  );
};

export default Destinations;
