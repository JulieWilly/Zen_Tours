import "./home.css";
import mtZuweri from "../../assets/mt_zuweri.jpg";
const SubscribeStrcuture = ({ subImg, subTitle }) => {
  return (
    <>
      <div className="subscribeSect">
        <div className="subsribeImg">
          <img src={subImg} alt="" />
        </div>
        <div className="subsribeInputs">
          <h2>{subTitle}</h2>
          <div className="inputEmail">
            <input type="email" placeholder="Email Address" />
            <button>Subsribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

const Subscribe = () => {
  return (
    <>
      <div className="subsribe_sect">
        <SubscribeStrcuture
          subImg={mtZuweri}
          subTitle={"Get special offers, and more from travel world"}
        />
      </div>
    </>
  );
};

export default Subscribe;
