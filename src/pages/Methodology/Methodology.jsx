
import { BookOpen, Brain, Target, Users } from "lucide-react";
import "./Methodology.css";

const Methodology = () => {
  const methods = [
    {
      title: "Personalized Learning",
      description:
        "We adapt our teaching methods to match each student's learning style and pace.",
      icon: Brain,
    },
    {
      title: "Interactive Sessions",
      description:
        "Engaging activities and discussions to make learning fun and effective.",
      icon: Users,
    },
    {
      title: "Goal-Oriented Approach",
      description:
        "Clear objectives and milestones to track and celebrate progress.",
      icon: Target,
    },
    {
      title: "Comprehensive Material",
      description:
        "Well-structured study materials that complement school curriculum.",
      icon: BookOpen,
    },
  ];

  return (
    <div className="methodology-page">
      <div className="container">
        <div className="methodology-hero">
          <h1 className="methodology-title">Our Methodology</h1>
          <p className="methodology-description">
            Discover our unique approach to teaching that ensures effective learning
            and academic success
          </p>
        </div>

        <div className="methods-grid">
          {methods.map((method, index) => (
            <div
              key={method.title}
              className="method-card"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <method.icon className="method-icon" />
              <h3 className="method-title">{method.title}</h3>
              <p className="method-description">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Methodology;