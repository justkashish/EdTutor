
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Methodology", path: "/methodology" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="nav">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          EdTutor
        </Link>

        <div className="nav-menu">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="nav-link"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="nav-mobile-button"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="nav-mobile-menu">
            <div className="nav-mobile-items">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;