import "./destinations.css";
import mtZuweri from "../../assets/mt_zuweri.jpg";
import otherDestinations from "../../data/OtherDestinations";
const PlacesStructure = ({
  placeImg,
  placeName,
  placeDesc,
  costPerGroup,
  costPerIndividual,
}) => {
  return (
    <>
      <div className="places_cards">
        <div className="placeIg">
          <img src={placeImg} alt="" />
        </div>
        <div className="place_description">
          <h3>{placeName}</h3>
          <p>{placeDesc}</p>
          <div className="placePrices">
            <p className="price">{costPerGroup}</p>
            <p className="price">{costPerIndividual}</p>
          </div>
          <p>
            <i className="learn_more">Learn more.&rarr;</i>
          </p>
        </div>
      </div>
    </>
  );
};
const Places = () => {
  return (
    <>
      <div className="places">
        {otherDestinations.map((other, i) => (
          <PlacesStructure
            placeImg={other.image}
            placeName={other.place_name}
            placeDesc={other.place_desc}
            costPerGroup={other.cost_per_group}
            costPerIndividual={other.const_per_individual}
          />
        ))}
      </div>
    </>
  );
};
export default Places;
