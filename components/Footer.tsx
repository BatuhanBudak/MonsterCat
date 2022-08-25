import Image from "next/image";
import player from "../public/icons/player-small.svg";
import bandCamp from "../public/icons/bandcamp.svg";
import soundCloud from "../public/icons/soundcloud.svg";
import apple from "../public/icons/apple.svg";
import youtube from "../public/icons/youtube.svg";
import spotify from "../public/icons/spotify.svg";
import twitter from "../public/icons/twitter.svg";
import instagram from "../public/icons/instagram.svg";
import facebook from "../public/icons/facebook.svg";
import twitch from "../public/icons/twitch.svg";
import tiktok from "../public/icons/tiktok.svg";
import triller from "../public/icons/triller.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-first-section">
        <ul className="footer-links-first-list">
          <li>
            <a className="footer-links" href="">
              about monstercat
            </a>
          </li>
          <li>
            <a className="footer-links" href="">
              contact us
            </a>
          </li>
          <li>
            <a className="footer-links" href="">
              careers
            </a>
          </li>
          <li>
            <a className="footer-links" href="">
              news
            </a>
          </li>
          <li>
            <a className="footer-links" href="">
              press
            </a>
          </li>
        </ul>
        <ul className="footer-links-second-list">
          <li>
            <a className="footer-links" href="">
              terms of service
            </a>
          </li>
          <li>
            <a className="footer-links" href="">
              privacy policy
            </a>
          </li>
        </ul>
        <div className="news-container">
          <p className="news-title">monstercat news</p>
          <p className="news-body">
            Dont miss a thing, stay up to date with the latest news from us.
          </p>
        </div>
        <form className="signup-form">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
          />
          <button className="signup-button"></button>
        </form>
      </div>
      <div className="footer-second-section">
        <div className="footer-second__icons-container">
          <p className="footer-second-rights">
            2011 - 2022 © Monstercat, All Rights Reserved
          </p>
          <ul className="footer-second__icons-list">
            <li>
              <a href="">
                <Image src={player} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <Image src={bandCamp} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <Image src={soundCloud} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <Image src={apple} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <Image src={youtube} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <Image src={spotify} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <Image src={twitter} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <Image src={instagram} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <Image src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <Image src={twitch} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <Image src={tiktok} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <Image src={triller} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="acknowledgements-container">
          <p className="acknowledgements">
            <small>
              We acknowledge with gratitude the traditional, ancestral and
              unceded land of the Coast Salish peoples, including the
              territories of the Squamish, Stó:lō and Selilwitulh
              (Tsleil-Waututh) and Musqueam Nations, on which Monstercat&apos;s
              Vancouver HQ stands.
            </small>
          </p>
          <p className="acknowledgements">
            <small>
              {" "}
              We acknowledge the unceded and ancestral territories of the
              Gabrielino/Tongva peoples on which our LA team live and work.
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
}
