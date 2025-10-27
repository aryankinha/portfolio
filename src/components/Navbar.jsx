import { Link } from "react-scroll";
import { useState } from "react";

export default function Navbar() {
  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];
  const [activeNav, setActiveNav] = useState("home");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f]/90 backdrop-blur-md text-neutral-200 px-32 py-4 flex justify-between items-center border-b border-neutral-800">
      {/* Logo */}
      <h1 className="text-xl font-semibold tracking-tight">Portfolio</h1>

      {/* Nav Links */}
      <div className="flex space-x-8 text-sm">
        {navItems.map((item) => {
          const itemLower = item.toLowerCase();
          return (
            <Link
              key={item}
              to={itemLower}
              smooth={true}
              duration={60}
              offset={
                itemLower === "home"
                  ? -70
                  : itemLower === "about"
                  ? -50
                  : itemLower === "skills"
                  ? -40
                  : itemLower === "projects"
                  ? -70
                  : itemLower === "experience"
                  ? -100
                  : itemLower === "contact"
                  ? -8
                  : -70
              }
              spy={true}
              onSetActive={() => setActiveNav(itemLower)}
              className={`cursor-pointer transition-colors duration-200 ${
                activeNav === itemLower
                  ? "text-blue-400 font-medium"
                  : "hover:text-blue-400"
              }`}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
