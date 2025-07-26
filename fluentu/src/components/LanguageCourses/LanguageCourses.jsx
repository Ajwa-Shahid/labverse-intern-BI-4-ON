import React from 'react';
import './LanguageCourses.css';

const LanguageCourses = () => {
  const courses = [
    {
      id: 1,
      name: 'Chinese',
      image: '/images/China.jpg',
      flag: '/images/ChinaLogo.png',
    },
    {
      id: 2,
      name: 'French',
      image: '/images/French.jpg',
      flag: '/images/Frenchlogo.png',
    },
    {
      id: 3,
      name: 'English',
      image: '/images/English.jpg',
      flag: '/images/EnglishLogo.png',
    },
    {
      id: 4,
      name: 'German',
      image: '/images/German.jpg',
      flag: '/images/GermanLogo.png',
    },
    {
      id: 5,
      name: 'Russian',
      image: '/images/Russian.jpg',
      flag: '/images/RussianLogo.png',
    },
    {
      id: 6,
      name: 'Portuguese',
      image: '/images/Portuguese.jpg',
      flag: '/images/PortugueseLogo.png',
    }
  ];

  return (
    <section className="language-courses-section">
      <h2>Engaging Self-paced Language Courses</h2>
      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <img
              src={course.image}
              alt={`Picture for ${course.name} course`}
              className="course-card-image"
            />
            <div className="course-card-info">
              <div className="flag-and-name">
              <img src={course.flag} alt={`${course.name} Flag`} className="flag-icon" />
              <p className="language-name">{course.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguageCourses;
