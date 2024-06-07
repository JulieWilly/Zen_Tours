import aboutImg from '../../assets/aboutImg1.jpg'
import { FaAward } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import TitleTag from '../../components/TitleTag';
import './home.css'
const About = () => {
    return (
      <>
        <div className="about_sect">
          <TitleTag title="About" />

          <div className="aboutImg">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about_desc_1">
            <div className="services">
              <i>{<FaAward />}</i>
              <h3>Best Services</h3>
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
        </div>
      </>
    );
}

export default About