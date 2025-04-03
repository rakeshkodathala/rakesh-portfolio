import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkToggle from "../DarkToggle/DarkToggle";
import "./Header.css";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#project" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveLink(item.name.toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-logo">Rakesh</h1>

        {/* Desktop Nav */}
        <nav className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={activeLink === item.name.toLowerCase() ? "active" : ""}
            >
              {item.name}
            </a>
          ))}
          <DarkToggle />
        </nav>

        {/* Mobile Toggle */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={activeLink === item.name.toLowerCase() ? "active" : ""}
            >
              {item.name}
            </a>
          ))}

          {/* ✅ Add toggle in mobile too */}
          <div className="mobile-toggle-wrapper">
            <DarkToggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
