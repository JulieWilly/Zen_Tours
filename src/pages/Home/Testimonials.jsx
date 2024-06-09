import TitleTag from "../../components/TitleTag";
import "./home.css";
import testimonialData from "../../data/TestimonialData";
import testimonialsImg from "../../assets/testimonials.jpg";


import { MdOutlineNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TestimonialsStructure = ({
  custImg,
  custName,
  custOccupation,
  custDesc,
}) => {
  return (
    <>
      
        <div className="testimonials">
          <div className="img">
            <img className="testImg carousel_img" src={custImg} alt="" />
          </div>
          <div className="cust_details">
            <div>
              <h3>{custName}</h3>
              <p>{custOccupation}</p>
            </div>
            <div className="ratings">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
          <p className="custDesc">{custDesc}</p>
        </div>
    </>
  );
};

const Testimonials = () => {

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
      <div className="custReviews">
        <img src={testimonialsImg} alt="" />
        <div className="layon">
          <TitleTag
            title={"Testimonials"}
            description={"Our customers reviews and testimonials"}
          />
         
          <div className="testmonialsSect">
            <Carousel className="carousel" responsive={responsive}>
              {testimonialData.map((testimonials, i) => (
                <TestimonialsStructure
                  custImg={testimonials.image}
                  custName={testimonials.name}
                  custOccupation={testimonials.occupation}
                  custReviews={testimonials.reviews}
                  custDesc={testimonials.description}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
      
    
}


export default Testimonials;
