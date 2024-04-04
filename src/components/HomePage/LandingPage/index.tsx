import iphone from "../../../assets/iphone.png";
import "./styles.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="headings-div">
        <h1 className="headings">Crypto Tracker Real Time.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          commodi quo placeat, laudantium dicta sunt!
        </p>
        <div className="btn-div">
          <a href="/dashboard">
            <button>Dashboard</button>
            <button>Share</button>
          </a>
        </div>
      </div>
      <div className="image-div">
        <img className="phone" src={iphone} alt="Not avialble" />
      </div>
    </div>
  );
};

export default LandingPage;
