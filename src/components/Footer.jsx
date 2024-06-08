import "./header.css";
import { Link } from "react-router-dom";
import ContactDetails from "./ContactDetails";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const FooterStructure = ({ title, home, destinations, trips, contacts }) => {
  return (
    <>
      <div className="footerSection">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="links">
          <h3>Navigation</h3>
          <Link className="Links" to={"/"}>
            {home}
          </Link>
          <Link className="Links" to={"/destinations"}>
            {destinations}
          </Link>
          <Link className="Links" to={"/trips"}>
            {trips}
          </Link>
          <Link className="Links" to={"/contacts"}>
            {contacts}
          </Link>
        </div>
        <div className="links">
          <SocialAccount
            twitter={<FaXTwitter />}
            facebook={<FaFacebookF />}
            linkedin={<FaLinkedinIn />}
            instagram={<FaInstagram />}
            email={<MdEmail />}
            phone={<FaPhoneAlt />}
          />
        </div>
      </div>
    </>
  );
};

const SocialAccount = ({
  twitter,
  instagram,
  facebook,
  linkedin,
  phone,
  email,
}) => {
  return (
    <>
      <div className="footerContacts">
        <h3>Follow us on</h3>
        <div className="ft_socials">
          <div className="socials">
            <i>{twitter}</i>
            <p>Twiiter</p>
          </div>
          <div className="socials">
            <i>{instagram}</i>
            <p>Instagram</p>
          </div>
          <div className="socials">
            <i>{facebook}</i>
            <p>Facebook</p>
          </div>
          <div className="socials">
            <i>{linkedin}</i>
            <p>LinkedIn</p>
          </div>
        </div>
        <div className="ft_phone_number">
          <div className="ft_contact">
            <i>{phone}</i>
            <p>+254 114139590</p>
          </div>
          <div className="ft_contact">
            <i>{email}</i>
            <p>wilfredmuchirekiama@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};
const Footer = () => {
  return (
    <>
      <div className="footer_sect">
        <FooterStructure
          title={"Zaph Travels"}
          home={"Home"}
          destinations={"Destinations"}
          trips={"Trips"}
          contacts={"Contacts"}
        />

        <p>&copy; Wilfred Muchire. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
