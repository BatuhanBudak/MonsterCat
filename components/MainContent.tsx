import React from 'react'
import AlbumInfo from './AlbumInfo'
import MusicVideo from './MusicVideo'
import Tracks from './Tracks'
import TrackTable from './TrackTable'

export default function MainContent() {
    return (
        <main>
            <AlbumInfo />
            <Tracks />
            <TrackTable />
            <MusicVideo />
        </main>
    )
}
