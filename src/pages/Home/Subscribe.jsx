import './home.css'
import mtZuweri from '../../assets/mt_zuweri.jpg'
const SubscribeStrcuture = ({subImg, subTitle}) => {
    return (
      <>
        <div className="subscribeSect">
          <div className="subsribeImg">
            <img src={subImg} alt="" />
          </div>
          <div className="subsribeInputs">
            <h2>{subTitle}</h2>
            <input type="email"  placeholder='Email Address' />
            <button>Subsribe</button>
          </div>
        </div>
      </>
    );
}

const Subscribe = () => {
    return (
      <>
        <div className="subsribeSect">
          <SubscribeStrcuture
            subImg={mtZuweri}
            subTitle={"Get special offers, and more from travelworld"}
          />
        </div>
      </>
    );
}

export default Subscribe;