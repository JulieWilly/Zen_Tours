import "./contacts.css";
import '../Trips/trips.css'
import TripsBanner from "../Trips/TripsBanner";
import tripsImg from "../../assets/contactus.jpg";
import TitleTag from "../../components/TitleTag";

const ContactStructure =() => {
    return <>
        d
    </>
}

const Contact = () => {
    return (
      <>
        <div className="contactsUsSect">
          <TripsBanner
            tripImg={tripsImg}
            tripsTitle={"Trips"}
            tripsDesc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere soluta nemo numquam non impedit molestias veritatis. Fugiat tempora dolor ex dolore vitae laudantium."
            }
          />

        </div>
        <TitleTag title={'Contact us Section'} />
        <div className="bottomSect">
            <ContactStructure />
        </div>
      </>
    );


}
export default Contact