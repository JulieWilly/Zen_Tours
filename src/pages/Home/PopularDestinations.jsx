import './home.css'
import TitleTag from '../../components/TitleTag';
import { FaArrowRightLong } from "react-icons/fa6";
import mtKenyaImg from '../../assets/mt_kenya.jpg'
import popularDestinations from '../../data/PopularDestinations'
const Popular = ({destImg, destTitle, destDesc, destPrices}) => {
    return (
      <>
        <div className="destination">
          <div className="destImg">
            <img src={destImg} alt="" />
          </div>
          <div className="destDesc">
            <h3>{destTitle}</h3>
            <p className='destDetails'>{destDesc}</p>
            <div className="bottom">
              <p className='prices'>{destPrices}</p>
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
const PopularDestinations = () => {
    return (
      <>
        <div className="popular_sect">
          <TitleTag
            title="Popular Destinations"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid odit repellat maxime recusandae harum iste, eligendi
                  mollitia porro, consectetur tempora, soluta explicabo officia
                  quaerat. Aliquid id possimus in numquam sapiente!"
          />
          <div className="destinations">
            {popularDestinations.map((popular, i) => (
              <Popular
                destImg={popular.Image}
                destTitle={popular.Title}
                destDesc={popular.Description}
                destPrices={popular.Prices}
              />
            ))}
          </div>
        </div>
      </>
    );
}

export default PopularDestinations;