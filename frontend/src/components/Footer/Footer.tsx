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
              <h5>About us</h5>
              <ul>
                <li>
                  <a href="#"> Who are we </a>
                </li>
                <li>
                  <a href="#"> IFMSA </a>
                </li>
                <li>
                  <a href="#"> What we do </a>
                </li>
                <li>
                  <a href="#"> The Team of Officials </a>
                </li>
                <li>
                  <a href="#"> Coordinators </a>
                </li>
                <li>
                  <a href="#"> Contact </a>
                </li>
                <li>
                  <a href="#"> Partners </a>
                </li>
              </ul>
            </div>
            <div className="footer-navbar-col">
              <h5>Support</h5>
              <ul>
                <li>
                  <a href="#"> Insight </a>
                </li>
                <li>
                  <a href="#"> Analyst </a>
                </li>
                <li>
                  <a href="#"> Marketing </a>
                </li>
                <li>
                  <a href="#"> Commerce </a>
                </li>
              </ul>
            </div>
            <div className="footer-navbar-col">
              <h5>Company</h5>
              <ul>
                <li>
                  <a href="#"> Analyst </a>
                </li>
                <li>
                  <a href="#"> Commerce </a>
                </li>
                <li>
                  <a href="#"> Marketing </a>
                </li>
                <li>
                  <a href="#"> Insight </a>
                </li>
              </ul>
            </div>
            <div className="footer-navbar-col">
              <h5>Legal</h5>
              <ul>
                <li>
                  <a href="#"> Commerce </a>
                </li>
                <li>
                  <a href="#"> Analyst </a>
                </li>
                <li>
                  <a href="#"> Insight </a>
                </li>
                <li>
                  <a href="#"> Marketing </a>
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
