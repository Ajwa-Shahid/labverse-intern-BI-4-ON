import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Social Profiles</h4>
            <ul>
              <li>
                <a href="#">
                  <img
                    src="/images/icons/facebook.png"
                    alt="Facebook"
                    className="icon-img"
                  />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/images/icons/twitter.png"
                    alt="Twitter"
                    className="icon-img"
                  />
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>General</h4>
            <ul>
              <li><a href="#">Courses</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Academic Pricing</a></li>
              <li><a href="#">FluentU As A Gift</a></li>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Signup for students</a></li>
              <li><a href="#">iPhone / iPad</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Languages</h4>
            <ul>
              <li><a href="#">Learn Spanish</a></li>
              <li><a href="#">Learn English</a></li>
              <li><a href="#">Learn French</a></li>
              <li><a href="#">Learn Chinese</a></li>
              <li><a href="#">Learn German</a></li>
              <li><a href="#">Learn Japanese</a></li>
              <li><a href="#">Learn Russian</a></li>
              <li><a href="#">Learn Italian</a></li>
              <li><a href="#">Learn Korean</a></li>
              <li><a href="#">Learn Portuguese</a></li>
              <li><a href="#">Aprende Inglés</a></li>
              <li><a href="#">英語を学ぶ</a></li>
              <li><a href="#">영어 공부</a></li>
              <li><a href="#">Aprenda Inglês</a></li>
              <li><a href="#">学习英语</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Learner Blogs</h4>
            <ul>
              <li><a href="#">Language Learner</a></li>
              <li><a href="#">Spanish Learner</a></li>
              <li><a href="#">English Learner</a></li>
              <li><a href="#">French Learner</a></li>
              <li><a href="#">Chinese Learner</a></li>
              <li><a href="#">German Learner</a></li>
              <li><a href="#">Japanese Learner</a></li>
              <li><a href="#">Russian Learner</a></li>
              <li><a href="#">Italian Learner</a></li>
              <li><a href="#">Korean Learner</a></li>
              <li><a href="#">Portuguese Learner</a></li>
              <li><a href="#">Business English</a></li>
              <li><a href="#">Blog de Inglés</a></li>
              <li><a href="#">英語ブログ</a></li>
              <li><a href="#">Блог по английскому языку</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Educator Blogs</h4>
            <ul>
              <li><a href="#">Language Educator</a></li>
              <li><a href="#">Spanish Educator</a></li>
              <li><a href="#">English Educator</a></li>
              <li><a href="#">French Educator</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-logo">
            <img src="/images/fluentu-logo.png" alt="FluentU" />
          </div>
          <div className="footer-legal">
            <p>© 2025 Enux Education Limited. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">Terms of use</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
