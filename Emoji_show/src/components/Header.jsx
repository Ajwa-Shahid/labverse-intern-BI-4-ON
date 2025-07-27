import './Header.css';

export default function Header() {
  return (
    <header>
      <nav>
        <div className="navbar">
          <h3>Ajwa Shahid</h3>
          <div className="navoptions">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contacts">Contacts</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
