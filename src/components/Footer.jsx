import './header.css'
import {Link } from 'react-router-dom'

const FooterStructure = ({title, home, destinations, trips, contacts}) => {
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
        </div>
      </>
    );
}
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
}

export default Footer;