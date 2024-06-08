import './destinations.css'
import mtZuweri from '../../assets/mt_zuweri.jpg'
const PlacesStructure = () => {
    return (
      <>
        <div className="places_cards">
          <div className="placeIg">
            <img src={mtZuweri} alt="" />
          </div>
          <div className="place_description">
            <h3>Muranga</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facere soluta nemo numquam non impedit molestias veritatis. Fugiat
              tempora dolor ex dolore vitae laudantium. Excepturi eum assumenda
              provident natus voluptas.
            </p>
            <div className="placePrices">
              <p className="price">Ksh. 1,200/group</p>
              <p className="price">Ksh. 500/Individual</p>
            </div>
            <p>
              <i className="learn_more">Learn more.&rarr;</i>
            </p>
          </div>
        </div>
      </>
    );
}
const Places = () => {

    return (
      <>
        <div className="places"><PlacesStructure/></div>
      </>
    );
}
export default Places;
