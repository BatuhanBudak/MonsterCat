import React from 'react'
import Image from 'next/image';
import albumCover from '../public/images/600.webp';

export default function AlbumInfo() {
    return (
        <section className='album-info-section'>
            <div className='album-image'>
                <Image src={albumCover} alt="album image" />
            </div>
            <p className='album-info'><span className='green'>Instinct</span>— Released May 22, 2020 </p>
            <div className='track-info-container'>
                <h1 className='track-info-track'>LEVEL DAYS</h1>
                <p className='track-info-artist'>CONRO</p>
            </div>
            <div className='album-button-container'>
                <button className='listen-button btn'>Listen now</button>
                <button className='share-button btn'>share</button>
            </div>
        </section>
    )
}
