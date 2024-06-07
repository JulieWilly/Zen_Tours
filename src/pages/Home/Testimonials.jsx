import TitleTag from '../../components/TitleTag';
import './home.css'
import testimonialData from '../../data/TestimonialData';
import testimonialsImg from '../../assets/testimonials.jpg'

const TestimonialsStructure = ({custImg, custName, custReviews,custOccupation, custDesc}) => {
    return (
      <>
        <div className="testimonials">
          <div className="img">
            <img className="testImg" src={custImg} alt="" />
          </div>
          <div className="cust_details">
            <div>
              <h3>{custName}</h3>
              <p>{custOccupation}</p>
            </div>
            {/* <div className="ratings">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div> */}
            <p>{custReviews}</p>
          </div>
          <p className='custDesc'>{custDesc}</p>
        </div>
      </>
    );
}

const Testimonials = () => {
    return (
      <div className="custReviews">
        <img src={testimonialsImg} alt="" />
        <div className="layon">
          <TitleTag
            title={"Testimonials"}
            description={"Our customers reviews and testimonials"}
          />

          <div className="testmonialsSect">
            {testimonialData.map((testimonials, i) => (
              <TestimonialsStructure
                custImg={testimonials.image}
                custName={testimonials.name}
                custOccupation={testimonials.occupation}
                custReviews={testimonials.reviews}
                custDesc={testimonials.description}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default Testimonials;