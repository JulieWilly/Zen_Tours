import aboutImg from "../../assets/aboutImg.jpg";
import { FaAward } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import TitleTag from "../../components/TitleTag";
import "react-multi-carousel/lib/styles.css";
import "./home.css";
import aboutData from "../../data/about";

const AboutImg =() => {
  return (
    <>
      <div className="aboutImg">
        <img src={aboutImg} alt="" />
      </div>
    </>
  );
}
const AboutStructure =({abtIcon, abtTitle, abtDesc}) => {
  return (
    <>
      
        <div className="about_desc_1">
          <div className="services">
            <i>{abtIcon}</i>
            <h3>{abtTitle}</h3>
            <p>
              {abtDesc}
            </p>
            <p className="learn_more">
              Learn more
              <i> {<FaArrowRightLong />} </i>
            </p>
          </div>
          <div className="services">
            <i>{<BiSolidOffer />}</i>
            <h3>Exclusive Offers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae eaque accusantium aut corporis repellat laudantium.
            </p>
            <p className="learn_more">
              Learn more
              <i> {<FaArrowRightLong />} </i>
            </p>
          </div>
          <div className="services">
            <i>{<IoMdPricetags />}</i>
            <h3>Price Guarantee</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae eaque accusantium aut corporis repellat laudantium.
            </p>
            <p className="learn_more">
              Learn more
              <i> {<FaArrowRightLong />} </i>
            </p>
          </div>
        </div>

    </>
  );
}
 
const About = () => {
 const responsive = {
   superLargeDesktop: {
     // the naming can be any, depends on you.
     breakpoint: { max: 4000, min: 900 },
     items: 3,
   },
   desktop: {
     breakpoint: { max: 910, min: 600 },
     items: 2,
   },
   tablet: {
     breakpoint: { max: 600, min: 464 },
     items: 1,
   },
   mobile: {
     breakpoint: { max: 464, min: 0 },
     items: 1,
   },
 };

  return (
    <>
    <div className="about_sect">
      <TitleTag className='title' title="About" description={'Get to learn more about our organization and how we work to ensure your'} />
      <AboutImg/>
      {
        aboutData.map((about, i) => 
        <AboutStructure abtIcon={<FaAward/>} abtTitle={about.aboutTitle} abtDesc={about.aboutDesc}/>
        )
      }
    </div>
      
    </>
  );
};

export default About;
