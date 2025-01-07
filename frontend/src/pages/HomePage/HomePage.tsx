import homeImage from "../../assets/images/homeMainImage.png";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
      <div className="home-text">
        <h1>Otvorite vrata novim iskustvima – svet je vaša granica!</h1>
        <p>
          Pridružite se zajednici studenata koji istražuju nove kulture, razvijaju veštine i grade globalne prilike kroz programe razmene.
        </p>
        <button className="cta-button">Pridružite se</button>
      </div>
      <div className="home-image">
        <img src={homeImage} alt="home" className="home-main-pic" />
      </div>
      
      <div className="background-ellipse top"></div>
      <div className="background-ellipse right"></div>
      <div className="background-ellipse bottom"></div>
    </div>
  );
};

export default HomePage;
