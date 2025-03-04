
import { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      question: "What grades do you teach?",
      answer: "We provide tutoring services for students from 1st through 8th grade.",
    },
    {
      question: "How are the classes conducted?",
      answer:
        "Classes are conducted in small groups to ensure personalized attention while maintaining an interactive learning environment.",
    },
    {
      question: "What subjects do you cover?",
      answer:
        "We cover all major subjects including Mathematics, Science, English, and Social Studies.",
    },
    {
      question: "How do you track student progress?",
      answer:
        "We maintain detailed progress reports and conduct regular assessments to track improvement and identify areas needing attention.",
    },
    {
      question: "What is your teaching methodology?",
      answer:
        "We use a combination of traditional teaching methods and modern technology to ensure effective learning outcomes.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="container">
        <div className="faq-hero">
          <h1 className="faq-title">
            Frequently Asked Questions
          </h1>
          <p className="faq-description">
            Find answers to common questions about our tutoring services
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;