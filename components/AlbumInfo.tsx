import React from "react";
import Image from "next/image";
import albumCover from "../public/images/600.webp";
import albumCoverBig from "../public/images/1024.webp";
import useScreenSize from "../hooks/useScreenSize";

export default function AlbumInfo() {
  const windowWidth = useScreenSize();
  const firstBreakPoint = 600;
  return (
    <section className="album-info-section">
      <div className="album-info-container">
        <div className="album-image">
          {windowWidth! < firstBreakPoint && (
            <Image src={albumCover} alt="album image" />
          )}
          {windowWidth! >= firstBreakPoint && (
            <Image src={albumCoverBig} alt="album image" />
          )}
        </div>
        <p className="album-info">
          <span className="green">Instinct</span>— Released May 22, 2020{" "}
        </p>
      </div>
      <div className="album-info-details-container">
        <div className="track-info-container">
          <h1 className="track-info-track">LEVEL DAYS</h1>
          <p className="track-info-artist">CONRO</p>
        </div>
        <div className="album-button-container">
          <button className="listen-button btn">Listen now</button>
          <button className="share-button btn">share</button>
        </div>
      </div>
    </section>
  );
}
