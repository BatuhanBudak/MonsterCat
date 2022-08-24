import React from "react";

export default function MusicVideo() {
    return (
        <section className="music-video-section">
            <h1 className="music-video-section-title">MUSIC VIDEO</h1>
            <div className="video-container">
                <iframe
                    src="https://www.youtube.com/embed/7nObtWENgxA?enablejsapi=1&amp;origin=https:%2F%2Fwww.monstercat.com"
                    title="Conro - Therapy [Monstercat Lyric Video]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
}
