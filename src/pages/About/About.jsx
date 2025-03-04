
import { ArrowRight, BookOpen, GraduationCap, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <div className="about-hero">
          <h1 className="about-title">About EdTutor</h1>
          <p className="about-description">
            We are passionate educators dedicated to making learning fun and
            effective for students up to 8th grade.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mission-grid">
          {[
            {
              icon: BookOpen,
              title: "Our Mission",
              description:
                "To provide quality education that sparks curiosity and fosters a love for learning.",
            },
            {
              icon: Heart,
              title: "Our Values",
              description:
                "We believe in personalized attention, interactive learning, and creating a supportive environment.",
            },
            {
              icon: GraduationCap,
              title: "Our Approach",
              description:
                "Combining traditional teaching methods with modern technology for optimal learning outcomes.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="mission-card"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <item.icon className="mission-icon" />
              <h3 className="mission-title">{item.title}</h3>
              <p className="mission-description">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="about-cta">
          <h2 className="cta-title">Ready to Start Learning?</h2>
          <p className="cta-description">
            Join EdTutor today and give your child the educational support they deserve.
          </p>
          <Link to="/contact" className="cta-button">
            Get Started <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;