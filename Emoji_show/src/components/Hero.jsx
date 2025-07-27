import './Hero.css';
import './Buttons.css';
import profileImg from '../assets/IMG/profile.jpeg';
import linkedinImg from '../assets/IMG/linkedin.webp';
import githubImg from '../assets/IMG/github.png';

export default function Hero() {
  return (
    <main>
      <div className="hero-section">
        <div className="image">
          <img src={profileImg} alt="Profile Picture" />
        </div>

        <div className="hero-content">
          <p className="para1">Hello, I'm</p>
          <p className="para2">Ajwa Shahid</p>
          <p className="para3">Front-end Developer</p>

          <div className="buttons">
            <button className="bttn bttn1">Download CV</button>
            <button className="bttn">Contact Info</button>
          </div>

          <div className="Accounts">
            <a
              href="https://www.linkedin.com/in/ajwa-ansari-766b11337/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="imgs" src={linkedinImg} alt="LinkedInLogo" />
            </a>
            <a
              href="https://github.com/Ajwa-Shahid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="imgs" src={githubImg} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
