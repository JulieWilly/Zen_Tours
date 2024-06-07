import HerosImg from '../../assets/herosImg.jpg'
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
const Heros = () => {
    return (
      <>
        <div className="herosSect">
          <div className="herosImg">
            <img src={HerosImg} alt="" />
          </div>
          <div className="heros_description">
            <div className="desc_top">
              <h2>Good Morning!</h2>
              <p>Explore Beautiful places in Kenya with Zaph Tours</p>
            </div>
            <div className="desc_bottom">
              <div className="locations">
                <i>
                  <CiLocationOn />
                </i>
                <div className="details">
                  <h4>Location</h4>
                  <p>Add Destination</p>
                </div>
              </div>
              <div className="Check_in locations">
                <i>
                  <FaRegCalendarAlt />
                </i>
                <div className="details">
                  <h4>Location</h4>
                  <p>Add Destination</p>
                </div>
              </div>
              <div className="Check_out locations">
                <i>
                  <FaRegCalendarAlt />
                </i>
                <div className="details">
                  <h4>Check Out</h4>
                  <p>Add Dates</p>
                </div>
              </div>
              <div className="Quests locations">
                <i>
                  <IoIosPeople />
                </i>
                <div className="details">
                  <h4>Quests</h4>
                  <p>Add Quests</p>
                </div>
              </div>
              <div className="search">
                <i>
                  <FaSearch />
                </i>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Heros