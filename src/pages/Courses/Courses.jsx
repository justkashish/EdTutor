
import { Book, Clock, Star, Users } from "lucide-react";
import "./Courses.css";

const Courses = () => {
  const courses = [
    {
      title: "Mathematics",
      description: "Master mathematical concepts through interactive learning",
      features: ["Numbers & Operations", "Algebra Basics", "Geometry"],
      icon: Star,
    },
    {
      title: "Science",
      description: "Explore the wonders of science with hands-on experiments",
      features: ["Physics", "Chemistry", "Biology"],
      icon: Book,
    },
    {
      title: "English",
      description: "Develop strong language and communication skills",
      features: ["Grammar", "Reading", "Writing"],
      icon: Users,
    },
  ];

  return (
    <div className="courses-page">
      <div className="container">
        <div className="courses-hero">
          <h1 className="courses-title">Our Courses</h1>
          <p className="courses-description">
            Comprehensive courses designed to help students excel in their academic journey
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className="course-card"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <course.icon className="course-icon" />
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <ul className="course-features">
                {course.features.map((feature) => (
                  <li key={feature} className="course-feature">
                    <Clock className="feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;