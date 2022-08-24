import { useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import Nav from "./Nav";
import Image from "next/image";
import logo from "../public/icons/monstercat-logo.webp";
import hamburger from "../public/icons/hamburger.svg";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const windowWidth = useScreenSize();
  const desktopScreenWidth = 800;

  function toggleNav() {
    if (windowWidth) {
      if (windowWidth > desktopScreenWidth) return;
      setNavOpen((prev) => !prev);
    }
  }

  function closeNav() {
    if (windowWidth) {
      if (windowWidth > desktopScreenWidth) return;
      setNavOpen(false);
    }
  }

  return (
    <header className={`header ${navOpen ? "nav-open" : ""}`}>
      <div className="header-bar">
        <div className="header-bar-content">
          <a href="https://www.monstercat.com" className="logo-link">
            <Image src={logo} alt="monstercat logo" />
          </a>
          <button
            className="nav-toggle"
            aria-expanded={navOpen}
            onClick={toggleNav}
            aria-controls="navigation"
          >
            <Image src={hamburger} alt="navigation" />
          </button>
        </div>
      </div>
      <Nav closeNav={closeNav} />
    </header>
  );
}
