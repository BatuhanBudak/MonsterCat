import React from "react";
import useScreenSize from "../hooks/useScreenSize";
import Image from "next/image";
import logoLarge from "../public/icons/monstercat-logo-nav.svg";
import useToggle from "../hooks/useToggle";
import close from "../public/icons/close.svg";
import twitter from "../public/icons/twitter.svg";
import instagram from "../public/icons/instagram.svg";
import twitch from "../public/icons/twitch.svg";
import tiktok from "../public/icons/tiktok.svg";
import facebook from "../public/icons/facebook.svg";
import player from "../public/icons/player-small.svg";

export default function Nav({ closeNav }) {
  const [toggledFirst, toggleStateFirst] = useToggle();
  const [toggledSecond, toggleStateSecond] = useToggle();
  const [toggledThird, toggleStateThird] = useToggle();
  const [toggledFourth, toggleStateFourth] = useToggle();

  return (
    <nav id="navigation" className="navigation">
      <div className="navigation-container">
        <div className="nav-top">
          <a className="nav-logo">
            <Image src={logoLarge} alt="" />
          </a>
          <div className="close-button" onClick={closeNav}>
            <Image src={close} alt="" />
          </div>
        </div>
        <div className="navigation-list-container">
          <ul className="navigation-list">
            <li className="nav__item">
              <a
                onClick={toggleStateFirst}
                className="nav-link nav__item has-content"
              >
                MUSIC
              </a>
              {toggledFirst && (
                <ul className="nav__item-sublist">
                  <li>
                    <a
                      className="nav__item-sublist-link"
                      href="https://www.monstercat.com/music"
                    >
                      OUR MUSIC
                    </a>
                  </li>
                  <li>
                    <a className="nav__item-sublist-link" href="">
                      INSTINCT
                    </a>
                  </li>
                  <li>
                    <a className="nav__item-sublist-link" href="">
                      UNCAGED
                    </a>
                  </li>
                  <li>
                    <a className="nav__item-sublist-link" href="">
                      SILK
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav__item">
              <a href="" className="nav-link">
                ARTISTS
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav-link nav__item has-content"
                onClick={toggleStateSecond}
              >
                ABOUT
              </a>
              {toggledSecond && (
                <ul className="nav__item-sublist">
                  <li>
                    <a className="nav__item-sublist-link" href="">
                      About Monstercat
                    </a>
                  </li>
                  <li>
                    <a className="nav__item-sublist-link" href="">
                      Diversity {"&"} Inclusion
                    </a>
                  </li>
                  <li>
                    <a className="nav__item-sublist-link" href="">
                      Code of Ethics
                    </a>
                  </li>
                  <li>
                    <a className="nav__item-sublist-link" href="">
                      Environmental
                    </a>
                  </li>
                  <li>
                    <a className="nav__item-sublist-link" href="">
                      Contact Us
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav__item">
              <a href="" className="nav-link">
                NEWS
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav-link nav__item has-content"
                onClick={toggleStateThird}
              >
                EVENTS
              </a>
              {toggledThird && (
                <ul className="nav__item-sublist">
                  <li>
                    <a className="nav__item-sublist-link" href="">
                      Monstercat Events Experience
                    </a>
                  </li>
                  <li>
                    <a className="nav__item-sublist-link" href="">
                      Upcoming Events
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                className="nav-link nav__item has-content"
                onClick={toggleStateFourth}
              >
                PROGRAMMING
              </a>
              {toggledFourth && (
                <ul className="nav__item-sublist">
                  <li>
                    <a className="nav__item-sublist-link" href="">
                      MonstercatTV
                    </a>
                  </li>
                  <li>
                    <a className="nav__item-sublist-link" href="">
                      Call of the Wild
                    </a>
                  </li>
                  <li>
                    <a className="nav__item-sublist-link" href="">
                      Silk Showcase
                    </a>
                  </li>
                  <li>
                    <a className="nav__item-sublist-link" href="">
                      Upcoming Shows
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav__item">
              <a href="" className="nav-link">
                GOLD
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav-link">
                PARTNERS
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav-link">
                PRESS
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav-link">
                PLAYER
              </a>
            </li>
            <li className="nav__item">
              <a href="/contact" className="nav-link">
                SHOP
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav-link">
                LOST CIVILIZATION
              </a>
            </li>
          </ul>
        </div>
        <div className="navigation-bottom">
          <ul className="nav-social-links-list">
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
          <div className="nav-bottom-links-container">
            <a href="" className="nav-bottom-signin">
              SIGN IN
            </a>
            <a href="" className="nav-bottom-signup">
              OR SIGN UP
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
