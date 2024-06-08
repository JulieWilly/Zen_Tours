import './trips.css'


const TripsBanner = ({ tripImg, tripsTitle, tripsDesc }) => {
  return (
    <>
      <div className="trips">
        <div className="tripsImg">
          <img src={tripImg} alt="" />
        </div>

        <div className="tripsDesc">
          <h1>{tripsTitle}</h1>
          <p>{tripsDesc}</p>
          <p className="view_more">View More &#11157;</p>
        </div>
      </div>
    </>
  );
}

export default TripsBanner;
