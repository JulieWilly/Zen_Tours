import "./banner.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import destImg1 from "../../src/assets/mt_zuweri.jpg";
import { FaAngleDown } from "react-icons/fa";
import lk_nakuru from "../../src/assets/lk_nakuru.jpg";
import tsavoImg from "../../src/assets/tsavo.jpg";
import coast from "../../src/assets/coast.jpg";
import nairobi from "../../src/assets/nairobi.jpg";

const BannerStructure = ({
  destImg1,
  destImg2,
  destImg3,
  destImg4,
  destLink1,
  destLink2,
  destDescription,
}) => {
  return (
    <>
      <div className="destinations">
        <div className="leftPart">
          <div className="left">
            <img src={destImg1} alt="" />
            <img src={destImg2} alt="" />
          </div>
          <div className="right">
            <img className="img1" src={destImg3} alt="" />
            <img className="img1" src={destImg4} alt="" />
          </div>
        </div>

        <div className="destTitle">
          <h1>
            {destLink1} <p>{<MdOutlineNavigateNext className="icon" />}</p>{" "}
            {destLink2}
          </h1>
          <p>{destDescription}</p>
          <p className="seeMore">See more {<FaAngleDown className="icon" />}</p>
        </div>
      </div>
    </>
  );
};
const Banner = () => {
  return (
    <>
      <div className="destinationsSect">
        <BannerStructure
          destImg1={lk_nakuru}
          destImg2={coast}
          destImg3={tsavoImg}
          destImg4={nairobi}
          destLink1={"Home"}
          destLink2={"Destinations"}
          destDescription={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          }
        />
      </div>
    </>
  );
};

export default Banner;
