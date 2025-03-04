
import { ArrowRight, BookOpen, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
// import { Tooltip } from "../components/ui/tooltip";
import "./Index.css";

const Index = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Making Learning Fun & Effective</h1>
            <p className="hero-description">
              Expert tutoring for students up to 8th grade, helping them excel in
              their academic journey
            </p>
            <div className="hero-buttons">
              <Link to="/courses" className="button button-primary">
                Explore Courses <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="button button-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">
            Why Choose EdTutor?
          </h2>
          <div className="features-grid">
            {[
              {
                icon: BookOpen,
                title: "Expert Teachers",
                description:
                  "Learn from experienced educators passionate about teaching and committed to student success",
              },
              {
                icon: Star,
                title: "Personalized Learning",
                description:
                  "Customized approach to match your child's learning style and pace for maximum engagement",
              },
              {
                icon: Users,
                title: "Small Batch Sizes",
                description:
                  "Ensuring individual attention and better learning outcomes with limited class sizes",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="feature-card"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="feature-icon-wrapper">
                  <feature.icon className="feature-icon" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-container">
          <h2 className="cta-title">
            Ready to Start Learning?
          </h2>
          <p className="cta-description">
            Join EdTutor today and give your child the educational support they
            deserve. Our expert teachers are ready to help them achieve their full potential!
          </p>
          {/* <Tooltip content="Get in touch with our team" position="top"> */}
            <Link
              to="/contact"
              className="cta-button"
            >
              Get Started <ArrowRight size={20} />
            </Link>
          {/* </Tooltip> */}
        </div>
      </section>
    </div>
  );
};

export default Index;