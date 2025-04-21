import "./WhoAreWePage.scss";
import whoAreWeImg from "../../assets/images/pages/who-are-we.png";
import belgrade from "../../assets/images/city/lkbeograd_grb.png";
import noviSad from "../../assets/images/city/lknovi_sad_grb.png";
import kragujevac from "../../assets/images/city/lkkragujevac_grb.png";
import kosovskaMitrovica from "../../assets/images/city/lkkosovska_mitrovica_grb.jpg";
import nis from "../../assets/images/city/lknis_grb.png";

const WhoAreWePage = () => {
  return (
    <div className="who-are-we-page">
      <div className="title-image-container">
        <img src={whoAreWeImg} alt="Who Are We" className="header-img" />
        <div className="image-overlay">
          <h1>Who are we</h1>
        </div>
      </div>

      <div
        className="big-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p>
          The Committee for International Cooperation of Medical Students –
          Serbia (IFMSA-Serbia) is an organization that brings together medical
          students from across Serbia. The association was founded in 1953 in
          Belgrade, and in the same year, we became a full member of the
          International Federation of Medical Students' Associations (IFMSA). We
          are one of the oldest members of this prestigious and largest student
          organization in the world. You can read more about IFMSA{" "}
          <a
            href="https://ifmsa.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <p>
          IFMSA-Serbia adheres to all operational rules set by IFMSA, and our
          activities are divided into six committees:
        </p>
        <ul>
          <li>Standing Committee on Professional Exchange (SCOPE)</li>
          <li>Standing Committee on Research Exchange (SCORE)</li>
          <li>Standing Committee on Public Health (SCOPH)</li>
          <li>
            Standing Committee on Reproductive Health including AIDS (SCORA)
          </li>
          <li>Standing Committee on Medical Education (SCOME)</li>
          <li>Standing Committee on Human Rights and Peace (SCORP)</li>
        </ul>

        <p>
          Within these committees, we carry out numerous activities and
          projects:
        </p>
        <ul>
          <li>
            We promote healthy lifestyles and engage in peer education. Topics
            addressed by our educators include: reproductive health and sexually
            transmitted infections, addiction diseases, healthy nutrition, and
            first aid.
          </li>
          <li>
            We organize one-month internships for our students in international
            medical centers and welcome foreign colleagues coming to Serbia for
            internships. We also promote Serbia and Serbian medicine.
          </li>
          <li>
            We support the National Strategy for Tobacco Control of the Republic
            of Serbia.
          </li>
          <li>
            We participate in the organ transplantation support program of the
            Ministry of Health as part of the national campaign "Extend Life."
          </li>
          <li>
            We organize humanitarian events, with our most famous being the
            "Sweet Parties – Sweets for a Smile."
          </li>
        </ul>

        <p>
          Some of the partners that recognize our quality include: USAID,
          UNICEF, UNAIDS, UNFPA, YPEER, Durex, the Ministry of Health of the
          Republic of Serbia, the Ministry of Education and Science of the
          Republic of Serbia, the Ministry of Youth and Sports of the Republic
          of Serbia, the National Institute of Public Health, the Clinical
          Center of Serbia, Medical Faculties in Belgrade, Novi Sad, Kragujevac,
          and Niš, the Secretariat of the City of Belgrade, the Student Health
          Protection Institute of Belgrade, the Red Cross of Serbia, DonorHero,
          and many others.
        </p>
      </div>

      <div
        className="big-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1>Locations</h1>
        <div className="city-grid">
          <div className="city-card">
            <div className="city-image">
              <img src={belgrade} alt="Belgrade" className="city-img" />
            </div>
            <h3>Belgrade</h3>
            <p>belgrade@ifmsa-serbia.org</p>
          </div>

          <div className="city-card">
            <div className="city-image">
              <img src={noviSad} alt="NoviSad" className="city-img" />
            </div>
            <h3>Novi Sad</h3>
            <p>novisad@ifmsa-serbia.org</p>
          </div>
          <div className="city-card">
            <div className="city-image">
              <img src={nis} alt="Nis" className="city-img" />
            </div>
            <h3>Niš</h3>
            <p>nis@ifmsa-serbia.org</p>
          </div>
          <div className="city-card">
            <div className="city-image">
              <img src={kragujevac} alt="Kragujevac" className="city-img" />
            </div>
            <h3>Kragujevac</h3>
            <p>kragujevac@ifmsa-serbia.org</p>
          </div>
          <div className="city-card">
            <div className="city-image">
              <img
                src={kosovskaMitrovica}
                alt="Kosovska Mitrovica"
                className="city-img"
              />
            </div>
            <h3>Other</h3>
            <p>contact@ifmsa-serbia.org</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWePage;
