import "./contacts.css";
import "../Trips/trips.css";
import TripsBanner from "../Trips/TripsBanner";
import tripsImg from "../../assets/contactus.jpg";
import TitleTag from "../../components/TitleTag";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Footer from "../../components/Footer";

const LocationDetails = () => {
  return (
    <>
      <div className="locationDetails">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.004702632412!2d37.145500550158275!3d-0.7224248322217987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828a28207db7113%3A0xbc8b3625ac089be8!2sMurang&#39;a!5e0!3m2!1sen!2ske!4v1717828054910!5m2!1sen!2ske"
            width="600px"
            height="450px"
            style={{ border: "2px solid black" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="companyContacts">
          <h2>Reach out to us</h2>
          <div className="ourContacts">
            <table>
              <tr>
                <th>
                  <div>{<MdEmail className="span" />}</div>
                  <div>Email Address</div>
                </th>
                <td>wilfredmuchirekiama@gmail.com</td>
              </tr>
              <tr>
                <th>
                  <div>{<FaPhoneAlt className="span" />}</div>
                  <div>Phone</div>
                </th>
                <td>+254 114139590</td>
              </tr>
              <tr>
                <th>
                  <div>{<FaLocationDot className="span" />}</div>

                  <div>Physical Address</div>
                </th>
                <td> P.O.Box 177 - 110120, Muranga</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

const TalkWithUs = () => {
  return (
    <>
      <div className="contactsTop">
        <div className="talkWithUs">
          <form action="post">
            <h3>Please, send us your message or query.</h3>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email address" />
            <input type="text" placeholder="Your subject" />
            <textarea placeholder="Type your message"></textarea>
            <button type="button">Send Message</button>
          </form>
        </div>

        <div className="workingHours">
          <h3>Working Hours</h3>
          <table>
            <tr>
              <th>Monday</th>
              <td>08:00 AM to 05:00 PM</td>
            </tr>
            <tr>
              <th>Tuesday</th>
              <td>08:00 AM to 05:00 PM</td>
            </tr>
            <tr>
              <th>Wedneday</th>
              <td>08:00 AM to 05:00 PM</td>
            </tr>
            <tr>
              <th>Thurday</th>
              <td>08:00 AM to 05:00 PM</td>
            </tr>
            <tr>
              <th>Friday</th>
              <td>08:00 AM to 04:00 PM</td>
            </tr>
            <tr>
              <th>Sarturday</th>
              <td>09:00 AM to 04:00 PM</td>
            </tr>
            <tr>
              <th>Sunday</th>
              <td>Closed.</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

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
      <TitleTag title={"Contact us Section"} />
      <div className="talkWithUsSect">
        <TalkWithUs />
      </div>
      <div className="locationDetails">
        <LocationDetails />
      </div>

      <Footer />
    </>
  );
};
export default Contact;
