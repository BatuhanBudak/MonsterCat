import { useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import Nav from "./Nav";
import Image from "next/image";
import logo from "../public/icons/monstercat-logo.webp";
import hamburger from "../public/icons/hamburger.svg";
import twitter from "../public/icons/twitter.svg";
import instagram from "../public/icons/instagram.svg";
import twitch from "../public/icons/twitch.svg";
import tiktok from "../public/icons/tiktok.svg";
import facebook from "../public/icons/facebook.svg";
import player from "../public/icons/player-small.svg";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const windowWidth = useScreenSize();
  const headerFirstBreakPoint = 550;

  function toggleNav() {
    setNavOpen((prev) => !prev);
  }

  function closeNav() {
    setNavOpen(false);
  }

  return (
    <header className={`header ${navOpen ? "nav-open" : ""}`}>
      <div className="header-bar">
        <div className="header-bar-content">
          <a href="https://www.monstercat.com" className="logo-link">
            <Image src={logo} alt="monstercat logo" />
          </a>

          {windowWidth >= headerFirstBreakPoint && (
            <ul className="header-social-links-list">
              <li>
                <a href="">
                  <Image src={instagram} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <Image src={twitter} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <Image src={tiktok} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <Image src={twitch} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <Image src={facebook} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <Image src={player} alt="" />
                </a>
              </li>
            </ul>
          )}
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
