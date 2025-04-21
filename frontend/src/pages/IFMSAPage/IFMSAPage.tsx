import { useState } from "react";
import "./IFMSAPage.scss";
import ifmsaImg from "../../assets/images/pages/ifmsa.png";
import worldMap from "../../assets/images/other/ifmsa_world_map.jpeg";

const IFMSAPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Our Vision",
      content:
        "A world where all medical students unite for global health and are equipped with the knowledge, skills and values to take on health leadership roles locally and globally.",
    },
    {
      title: "Our Mission",
      content:
        "To offer future physicians a comprehensive introduction to global health issues. Through our programming and opportunities, we develop culturally sensitive students of medicine, intent on influencing the transnational inequalities that shape the health of our planet.",
    },
    {
      title: "Our Values",
      content:
        "We believe in student potential, volunteerism, health equity, diversity, integrity, solidarity, and professional excellence. These values guide our work and our interactions with partners and communities.",
    },
  ];

  return (
    <div>
      <div className="title-image-container">
        <img src={ifmsaImg} alt="IFMSA" className="header-img" />
        <div className="image-overlay">
          <h1>IFMSA</h1>
        </div>
      </div>

      <div
        className="big-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p>
          The IFMSA is an independent, non-governmental and non-political
          federation of medical students' associations throughout the world. As
          of March 2018, IFMSA represents national medical student associations
          from 127 countries in six continents. Our membership consists of more
          than 1,300,000 medical students worldwide.
        </p>
        <p>
          Since 1951, IFMSA has been run for and by medical students on a
          not-for-profit basis. Officially recognized as a Non-Governmental
          Organization within the United Nations' system, our organization is
          recognized by the World Health Organization as the international forum
          for medical students and is considered the student chapter of the
          World Medical Association. IFMSA is registered as a charitable
          organization in the Netherlands.
        </p>
        <p>
          For almost 60 years, IFMSA has existed to bring together the global
          medical student community working on global health issues. Hundreds of
          activities are planned, designed, and carried out every year on the
          local, national and international levels.
        </p>
        <p>
          Projects, conferences and workshops are organized across member
          countries in the fields of medical education, public health,
          reproductive health, gender issues and human rights and peace, thus
          offering medical students a taste of the real and pressing health
          issues worldwide.
        </p>
        <p>
          The IFMSA experience shows students that they are not passive subjects
          in a rapidly globalizing world, but are valuable individuals with a
          potentially powerful role to play in global health. They learn that
          their idealistic goals can be achieved with readily attainable
          knowledge and commitment. In IFMSA, the emphasis is placed on students
          returning to their local environments with new ideas and the skills to
          implement them. As the doctors of tomorrow and future leaders of
          health, we feel confident that our students will carry this spirit
          with them throughout their professional lives.
        </p>
      </div>

      <div
        className="tabs-section big-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="tabs-container">
          <div className="tabs">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`tab-button ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="tab-content">
            <h3>{tabs[activeTab].title}</h3>
            <p>{tabs[activeTab].content}</p>
          </div>
        </div>
      </div>

      <div className="bottom-image-section">
        <img src={worldMap} alt="IFMSA World Map" className="world-map-image" />
        <p className="image-description">
          IFMSA global presence across 127 countries, connecting medical
          students worldwide.
        </p>
      </div>
    </div>
  );
};

export default IFMSAPage;
