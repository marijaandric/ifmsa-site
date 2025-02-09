import "./Footer.css";
import logo from "../../assets/images/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const getYear = (): number => {
    return new Date().getFullYear();
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-navbar-container">
          <div className="footer-company-details">
            <div className="footer-details-inner">
              <div className="footer-logo">
                <img src={logo} alt="Logo" />
              </div>
              <div className="footer-content">
                <p className="footer-title">
                  Komitet za Međunarodnu Saradnju Studenata Medicine - Srbija,
                  IFMSA-Serbia
                </p>
                <p>ifmsa-serbia@ifmsa.org</p>
                <p>
                  Generalni sekretarijat: Dr Subotića 8 (Dekanat Medicinskog
                  Fakulteta), 11129 Beograd 102, Srbija
                </p>
              </div>
              <div className="footer-icons">
                <ul>
                  <li>
                    <a href="#">
                      <FacebookIcon
                        fontSize="large"
                        sx={{ color: "#cc3c3e" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <XIcon fontSize="large" sx={{ color: "#cc3c3e" }} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <InstagramIcon
                        fontSize="large"
                        sx={{ color: "#cc3c3e" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <LinkedInIcon
                        fontSize="large"
                        sx={{ color: "#cc3c3e" }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-navbar">
            <div className="footer-navbar-col">
              <h5>O nama</h5>
              <ul>
                <li>
                  <a href="#"> Ko smo mi </a>
                </li>
                <li>
                  <a href="#"> IFMSA </a>
                </li>
                <li>
                  <a href="#"> Sta mi radimo </a>
                </li>
                <li>
                  <a href="#"> Tim zvanicnika </a>
                </li>
                <li>
                  <a href="#"> Koordinatori </a>
                </li>
                <li>
                  <a href="#"> Kontakt </a>
                </li>
                <li>
                  <a href="#"> Partneri </a>
                </li>
              </ul>
            </div>
            <div className="footer-navbar-col">
              <h5>Razmena</h5>
              <ul>
                <li>
                  <a href="#"> Prijavi se za razmenu </a>
                </li>
                <li>
                  <a href="#"> SCOPE i SCORE </a>
                </li>
                <li>
                  <a href="#"> Razmena u Srbiji </a>
                </li>
                <li>
                  <a href="#"> Utisci sa razmene </a>
                </li>
              </ul>
            </div>
            <div className="footer-navbar-col">
              <h5>Drugo</h5>
              <ul>
                <li>
                  <a href="#"> Novosti </a>
                </li>
                <li>
                  <a href="#"> Q&A </a>
                </li>
                <li>
                  <a href="#"> IFMSA Zurnal </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© {getYear()} IFMSA-Serbia</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
