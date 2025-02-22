import "./HomePage.css";
import HomeVideo from "../../assets/videos/HomeVideo.mp4";
import HomeCard from "../../components/Cards/HomeCard/HomeCard";
import JournalCard from "../../components/Cards/JournalCard/JournalCard";
import NewsCard from "../../components/Cards/NewsCard/NewsCard";
import OrganizationCard from "../../components/Cards/OrganizationCard/OrganizationCard";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import GroupsIcon from "@mui/icons-material/Groups";

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
        <div className="home-text">
          <h1>Otvorite vrata novim iskustvima – svet je vaša granica!</h1>
          <p>
            Pridružite se zajednici studenata koji istražuju nove kulture,
            razvijaju veštine i grade globalne prilike kroz programe razmene.
          </p>
          <button className="button-red big-button">Saznaj više</button>
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
            <h3 className="red-text">Pogledaj više</h3>
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
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="big-container"
      >
        <div>
          <div className="flex-row space-between">
            <h1>Novosti</h1>
            <h3 className="red-text">Pogledaj više</h3>
          </div>
          <div className="news-card-container">
            <NewsCard
              title="Title"
              imageUrl="https://ifmsa.org/wp-content/uploads/2024/10/Copy-of-OAW-2024-Instagram-Post-1080-x-1350-px.zip-1.png"
              category="Technology"
              description="This is a sample description for the news card component."
              onDelete={() => {}}
              onEdit={() => {}}
            />
            <NewsCard
              title="Title"
              imageUrl="https://ifmsa.org/wp-content/uploads/2024/10/Copy-of-OAW-2024-Instagram-Post-1080-x-1350-px.zip-1.png"
              category="Technology"
              description="This is a sample description for the news card component."
              onDelete={() => {}}
              onEdit={() => {}}
            />
            <NewsCard
              title="Title"
              imageUrl="https://ifmsa.org/wp-content/uploads/2024/10/Copy-of-OAW-2024-Instagram-Post-1080-x-1350-px.zip-1.png"
              category="Technology"
              description="This is a sample description for the news card component."
              onDelete={() => {}}
              onEdit={() => {}}
            />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="big-container"
      >
        <div className="flex-row space-between">
          <h1>Šta nas čini posebnim</h1>
        </div>
        <div>
          <div className="organization-card-container">
            <OrganizationCard
              icon={<LightbulbIcon fontSize="large" />}
              number="150+"
              description="Initiatives Carried Out Annually"
            />
            <OrganizationCard
              icon={<AutoStoriesIcon fontSize="large" />}
              number="230+"
              description="Students hosted from abroad for exchanges or programs."
            />
            <OrganizationCard
              icon={<GroupsIcon fontSize="large" />}
              number="240+"
              description="Local students participating in international exchanges."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
