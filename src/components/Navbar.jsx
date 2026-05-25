import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const menu = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "pricing", label: "Pricing" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId) => {
    setActive(sectionId);
    setOpen(false);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">MarketPro</div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Menu */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        {menu.map((item) => (
          <li
            key={item.id}
            className={active === item.id ? "active" : ""}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </li>
        ))}

        <button
          className="mobile-btn"
          onClick={() => scrollToSection("contact")}
        >
          Get Started
        </button>
      </ul>
    </nav>
  );
}