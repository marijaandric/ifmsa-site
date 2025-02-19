import "./HomePage.css";
import HomeVideo from "../../assets/videos/HomeVideo.mp4";
import HomeCard from "../../components/HomeCard/HomeCard";
import JournalCard from "../../components/JournalCard/JournalCard";

const HomePage = () => {
  const testJournalData = [
    {
      title: "Naslov 1",
      description: "Opis za prvu karticu...",
      image: "https://heliant.rs/wp-content/uploads/2023/05/IFMSA.jpg",
    },
    {
      title: "Naslov 2",
      description: "Opis za drugu karticu...",
      image: "https://heliant.rs/wp-content/uploads/2023/05/IFMSA.jpg",
    },
    {
      title: "Naslov 3",
      description: "Opis za treću karticu...",
      image: "https://heliant.rs/wp-content/uploads/2023/05/IFMSA.jpg",
    },
  ];
  return (
    <>
      <video autoPlay muted loop className="homeVideo">
        <source src={HomeVideo} type="video/mp4" />
      </video>
      <div
        className="home-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="big-container home-text">
          <h1>Otvorite vrata novim iskustvima – svet je vaša granica!</h1>
          <p>
            Pridružite se zajednici studenata koji istražuju nove kulture,
            razvijaju veštine i grade globalne prilike kroz programe razmene.
          </p>
          <button className="button-red">Saznaj više</button>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="big-container"
      >
        <h1>Saznajte više o nama</h1>
        <div className="card-container">
          <HomeCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNl-K86aREziqvh_eWU_vsqgpM6fx9li8uFzLFC8ee5N1Eu47RWsxYzOIu1EOZoDMEWs&usqp=CAU"
            title="Dobrodošli!"
            onButtonClick={() => {}}
          />

          <HomeCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNl-K86aREziqvh_eWU_vsqgpM6fx9li8uFzLFC8ee5N1Eu47RWsxYzOIu1EOZoDMEWs&usqp=CAU"
            title="Dobrodošli!"
            onButtonClick={() => {}}
          />

          <HomeCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNl-K86aREziqvh_eWU_vsqgpM6fx9li8uFzLFC8ee5N1Eu47RWsxYzOIu1EOZoDMEWs&usqp=CAU"
            title="Dobrodošli!"
            onButtonClick={() => {}}
          />

          <HomeCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNl-K86aREziqvh_eWU_vsqgpM6fx9li8uFzLFC8ee5N1Eu47RWsxYzOIu1EOZoDMEWs&usqp=CAU"
            title="Dobrodošli!"
            onButtonClick={() => {}}
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="big-container"
      >
        <div>
          <div className="flex-row space-between">
            <h1>IFMSA Journal</h1>
            <h3 className="red-text">View more</h3>
          </div>
          {testJournalData.map((item, index) => (
            <JournalCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
