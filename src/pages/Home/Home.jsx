import "./home.css";
import Heros from "./Heros";
import About from "./About";
import Header from "../../components/Header";
import PopularDestinations from "./PopularDestinations";
import Testimonials from "./Testimonials";
import Subscribe from "./Subscribe";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Heros />
      <About />
      <PopularDestinations />
      <Testimonials />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
