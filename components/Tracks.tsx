import Image from "next/image";
import player from '../public/icons/player.svg';
import bandCamp from '../public/icons/bandcamp.svg';
import soundCloud from '../public/icons/soundcloud.svg';
import apple from '../public/icons/apple.svg';
import youtube from '../public/icons/youtube.svg';
import spotify from '../public/icons/spotify.svg';

export default function Tracks() {
    return (
        <section className="tracks-section">
            <h1 className="tracks-title">stream it your way</h1>
            <div className="icons-container">
                <a className="icon-link" href="">
                    <Image src={player} alt="monstercat player" />
                </a>
                <a className="icon-link" href="">
                    <Image src={bandCamp} alt="bandcamp logo" />
                </a>
                <a className="icon-link" href="">
                    <Image src={soundCloud} alt="soundcloud logo" />
                </a>
                <a className="icon-link" href="">
                    <Image src={apple} alt="apple-logo" />
                </a>
                <a className="icon-link" href="">
                    <Image src={youtube} alt="youtube logo" />
                </a>
                <a className="icon-link" href="">
                    <Image src={spotify} alt="spotify logo" />
                </a>
            </div>
        </section>
    );
}
