import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-6 py-4">
          <li>
            <Link
              to="/"
              onClick={() => scrollToSection("hero")}
              className="hover:text-primary transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            {location.pathname === "/" ? (
              <button
                onClick={() => scrollToSection("work")}
                className="hover:text-primary transition-colors"
              >
                Work
              </button>
            ) : (
              <Link to="/work" className="hover:text-primary transition-colors">
                Work
              </Link>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-primary transition-colors"
              >
                About
              </button>
            ) : (
              <Link
                to="/about"
                className="hover:text-primary transition-colors"
              >
                About
              </Link>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition-colors"
              >
                Contact
              </button>
            ) : (
              <Link
                to="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
