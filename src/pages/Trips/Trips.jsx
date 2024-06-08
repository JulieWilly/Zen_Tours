import "./trips.css";
import tripsImg from "../../assets/testimonials.jpg";
import TitleTag from "../../components/TitleTag";
import TripsBanner from "./TripsBanner";
import trips from "../../data/Trips";
import Footer from '../../components/Footer'

const TripsStructure = ({
  packageImg,
  packageName,
  packageDesc,
  packagePrice,
}) => {
  return (
    <>
      <div className="tripsPackages">
        <div className="packImg">
          <img src={packageImg} alt="" />
        </div>
        <div className="packDetails">
          <h3>{packageName}</h3>
          <p>{packageDesc}</p>
          <hr />
          <button>{packagePrice}</button>

          <button className="view_moreBtn">View More &#11157;</button>
        </div>
      </div>
    </>
  );
};

const Trips = () => {
  return (
    <>
      <div className="tripsSect">
        <TripsBanner
          tripImg={tripsImg}
          tripsTitle={"Trips"}
          tripsDesc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere soluta nemo numquam non impedit molestias veritatis. Fugiat tempora dolor ex dolore vitae laudantium."
          }
        />
      </div>
      <div className="types_of_trips">
        <TitleTag
          className="viewPakages"
          title={"View our trips packages and offers"}
          description={
            "lordsjsdjklsdkljsdjklsdjklsdjklsdjksdjkldslsdjlljkdsklsdklsdjklsdjlsdjkldsjkldsjklsdjklsdsjkldjdklssdjkl"
          }
        />
        <div className="tripsDestinations">
          {trips.map((trips, s) => (
            <TripsStructure
              packageName={trips.package_title}
              packageImg={trips.packageImage}
              packageDesc={trips.package_desc}
              packagePrice={trips.package_price}
            />
          ))}
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Trips;
