import Image from "next/image";
import play from "../public/icons/play.svg";
import share from "../public/icons/share.svg";

export default function TrackTable() {
    return (
        <section className="tracks-table-container">
            <h1 className="track-list-title">track list</h1>
            <table className="tracks-table">
                <tbody>
                    <tr>
                        <td className="track-list-number">1</td>
                        <td>
                            <button className="track-list-play-button">
                                <Image src={play} alt="" />
                            </button>
                        </td>
                        <td>
                            <div className="track-list-info-container">
                                The Small Things
                                <span className="track-list-info-artist">Conro</span>
                            </div>
                        </td>
                        <td className="track-list-time">3:35</td>
                        <td className="track-list-share-button-container">
                            <button className="track-list-share-button">
                                <Image src={share} alt="" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="track-list-number">2</td>
                        <td>
                            <button className="track-list-play-button">
                                <Image src={play} alt="" />
                            </button>
                        </td>
                        <td>
                            <div className="track-list-info-container">
                                Without Your Love
                                <span className="track-list-info-artist">Conro</span>
                            </div>
                        </td>
                        <td className="track-list-time">3:09</td>
                        <td className="track-list-share-button-container">
                            <button className="track-list-share-button">
                                <Image src={share} alt="" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="track-list-number">3</td>
                        <td>
                            <button className="track-list-play-button">
                                <Image src={play} alt="" />
                            </button>
                        </td>
                        <td>
                            <div className="track-list-info-container">
                                Therapy
                                <span className="track-list-info-artist">Conro</span>
                            </div>
                        </td>
                        <td className="track-list-time">3:06</td>
                        <td className="track-list-share-button-container">
                            <button className="track-list-share-button">
                                <Image src={share} alt="" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="track-list-number">4</td>
                        <td>
                            <button className="track-list-play-button">
                                <Image src={play} alt="" />
                            </button>
                        </td>
                        <td>
                            <div className="track-list-info-container">
                                Fighers
                                <span className="track-list-info-artist">Conro</span>
                            </div>
                        </td>
                        <td className="track-list-time">3:46</td>
                        <td className="track-list-share-button-container">
                            <button className="track-list-share-button">
                                <Image src={share} alt="" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="track-list-number">5</td>
                        <td>
                            <button className="track-list-play-button">
                                <Image src={play} alt="" />
                            </button>
                        </td>
                        <td>
                            <div className="track-list-info-container">
                                Way Up
                                <span className="track-list-info-artist">Conro{'&'}Nevve</span>
                            </div>
                        </td>
                        <td className="track-list-time">3:32</td>
                        <td className="track-list-share-button-container">
                            <button className="track-list-share-button">
                                <Image src={share} alt="" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="track-list-number">6</td>
                        <td>
                            <button className="track-list-play-button">
                                <Image src={play} alt="" />
                            </button>
                        </td>
                        <td>
                            <div className="track-list-info-container">
                                Waiting
                                <span className="track-list-info-artist">Conro</span>
                            </div>
                        </td>
                        <td className="track-list-time">3:07</td>
                        <td className="track-list-share-button-container">
                            <button className="track-list-share-button">
                                <Image src={share} alt="" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="track-list-number">7</td>
                        <td>
                            <button className="track-list-play-button">
                                <Image src={play} alt="" />
                            </button>
                        </td>
                        <td>
                            <div className="track-list-info-container">
                                Dreaming
                                <span className="track-list-info-artist">Conro</span>
                            </div>
                        </td>
                        <td className="track-list-time">2:57</td>
                        <td className="track-list-share-button-container">
                            <button className="track-list-share-button">
                                <Image src={share} alt="" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="track-list-number">8</td>
                        <td>
                            <button className="track-list-play-button">
                                <Image src={play} alt="" />
                            </button>
                        </td>
                        <td>
                            <div className="track-list-info-container">
                                Tattoo
                                <span className="track-list-info-artist">Conro</span>
                            </div>
                        </td>
                        <td className="track-list-time">3:29</td>
                        <td className="track-list-share-button-container">
                            <button className="track-list-share-button">
                                <Image src={share} alt="" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="track-list-number">9</td>
                        <td>
                            <button className="track-list-play-button">
                                <Image src={play} alt="" />
                            </button>
                        </td>
                        <td>
                            <div className="track-list-info-container">
                                Out for the Night
                                <span className="track-list-info-artist">Conro</span>
                            </div>
                        </td>
                        <td className="track-list-time">3:05</td>
                        <td className="track-list-share-button-container">
                            <button className="track-list-share-button">
                                <Image src={share} alt="" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="track-list-number">10</td>
                        <td>
                            <button className="track-list-play-button">
                                <Image src={play} alt="" />
                            </button>
                        </td>
                        <td>
                            <div className="track-list-info-container">
                                Overdue
                                <span className="track-list-info-artist">Conro</span>
                            </div>
                        </td>
                        <td className="track-list-time">2:48</td>
                        <td className="track-list-share-button-container">
                            <button className="track-list-share-button">
                                <Image src={share} alt="" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="track-list-number">11</td>
                        <td>
                            <button className="track-list-play-button">
                                <Image src={play} alt="" />
                            </button>
                        </td>
                        <td>
                            <div className="track-list-info-container">
                                Say it
                                <span className="track-list-info-artist">Conro</span>
                            </div>
                        </td>
                        <td className="track-list-time">3:04</td>
                        <td className="track-list-share-button-container">
                            <button className="track-list-share-button">
                                <Image src={share} alt="" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="track-list-number">12</td>
                        <td>
                            <button className="track-list-play-button">
                                <Image src={play} alt="" />
                            </button>
                        </td>
                        <td>
                            <div className="track-list-info-container">
                                Here to Stay
                                <span className="track-list-info-artist">Conro</span>
                            </div>
                        </td>
                        <td className="track-list-time">2:44</td>
                        <td className="track-list-share-button-container">
                            <button className="track-list-share-button">
                                <Image src={share} alt="" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
