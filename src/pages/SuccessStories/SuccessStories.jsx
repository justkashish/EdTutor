
import { Quote, Star } from "lucide-react";
import "./SuccessStories.css";

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Sarah's Parent",
      student: "Sarah",
      grade: "7th Grade",
      content:
        "EdTutor helped Sarah improve her math scores significantly. The personalized attention made all the difference.",
      rating: 5,
    },
    {
      name: "John's Parent",
      student: "John",
      grade: "5th Grade",
      content:
        "The interactive learning approach kept John engaged and excited about science. His grades improved tremendously.",
      rating: 5,
    },
    {
      name: "Emily's Parent",
      student: "Emily",
      grade: "8th Grade",
      content:
        "The teachers at EdTutor are exceptional. Emily's confidence in English has grown immensely.",
      rating: 5,
    },
  ];

  return (
    <div className="success-page">
      <div className="container">
        <div className="success-hero">
          <h1 className="success-title">Success Stories</h1>
          <p className="success-description">
            Read about the achievements of our students and the impact of our
            teaching methodology
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="testimonial-card"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Quote className="testimonial-icon" />
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="star-icon"
                  />
                ))}
              </div>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-info">
                  Parent of {testimonial.student}, {testimonial.grade}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;