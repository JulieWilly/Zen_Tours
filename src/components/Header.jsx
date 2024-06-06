import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import './header.css'
const ContactDetails = ({twitter, facebook, instagram, linkedin,phone,email}) => {
  return (
    <>
      <div className="contacts">
        <div className="contacts_socials">
          <i>{twitter}</i>
          <i>{instagram}</i>
          <i>{facebook}</i>
          <i>{linkedin}</i>
        </div>
        <div className="phone_number">
          <div className="contact">
            <i>{phone}</i>
            <p>+254 114139590</p>
          </div>
          <div className="contact">
            <i>{email}</i>
            <p>wilfredmuchirekiama@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};
const NavLinks = () => {
  return (
    <>
      <div className="navLinks">
        <ul>
          <li>
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to={"/destinations"}>
              Destinations
            </Link>
          </li>
          <li>
            <Link className="link" to={"/trips"}>
              Trips
            </Link>
          </li>
          <li>
            <Link className="link" to={"/contacts"}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
const Header = () => {
  return (
    <>
      <div className="headers_sect">
        <div className="header_top">
          <ContactDetails
            twitter={<FaXTwitter />}
            instagram={<FaInstagram />}
            linkedin={<FaFacebookF />}
            facebook={<FaLinkedinIn />}
            phone={<FaPhoneAlt />}
            email={<MdEmail />}
          />
        </div>
        <div className="navBar">
          <div>
            <h1>Zaph Tours</h1>
          </div>
          <NavLinks/>
        </div>
      </div>
    </>
  );
};


export default Header;